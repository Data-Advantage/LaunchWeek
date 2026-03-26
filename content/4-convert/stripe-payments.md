[Back to Day 4: Convert](README.md)

# Payment Integration (Stripe in 30 Min)

Wire up Stripe Checkout, subscriptions, and the Customer Portal. The complete implementation guide for Next.js.

## Why This Matters

Every day your product is live without a payment flow is a day you can't learn whether people will actually pay. And until people pay, you don't have a business — you have a hobby.

Stripe is the default choice for SaaS payments. It handles PCI compliance, subscription management, invoicing, and global payment methods so you don't have to. The setup takes about 30 minutes if you follow this guide.

---

## What You're Building

- **Stripe Checkout**: hosted payment page for new subscriptions
- **Stripe Customer Portal**: let customers manage their subscription (upgrade, downgrade, cancel)
- **Webhooks**: receive events from Stripe (subscription created, payment failed, etc.) and update your database

This is the minimum you need to launch with paid subscriptions.

---

## Prerequisites

- Stripe account (free to create)
- Next.js app with a database (Convex, Supabase, or similar)
- Environment variables configured in Vercel

---

## Step 1: Install and Configure Stripe

```bash
npm install stripe @stripe/stripe-js
```

Add to your `.env.local`:
```
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

Create a Stripe client singleton:

```typescript
// lib/stripe.ts
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})
```

---

## Step 2: Create Your Products and Prices in Stripe

In the Stripe Dashboard (or via API), create:

```typescript
// This is for reference — do this in the Stripe Dashboard for simplicity
// Or use the Stripe CLI: stripe products create

const product = await stripe.products.create({
  name: 'Pro Plan',
  description: 'For founders scaling their content operation',
})

const price = await stripe.prices.create({
  product: product.id,
  unit_amount: 7900, // $79.00 in cents
  currency: 'usd',
  recurring: {
    interval: 'month',
  },
})

// Also create annual price
const annualPrice = await stripe.prices.create({
  product: product.id,
  unit_amount: 75840, // $79 * 12 * 0.8 = $758.40 annually ($63.20/mo)
  currency: 'usd',
  recurring: {
    interval: 'year',
  },
})
```

Save the price IDs as environment variables:
```
STRIPE_PRICE_STARTER_MONTHLY=price_...
STRIPE_PRICE_PRO_MONTHLY=price_...
STRIPE_PRICE_PRO_ANNUAL=price_...
STRIPE_PRICE_BUSINESS_MONTHLY=price_...
```

---

## Step 3: Create Checkout Session

When a user clicks "Start free trial" or "Subscribe":

```typescript
// app/api/stripe/checkout/route.ts
import { stripe } from '@/lib/stripe'
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { priceId } = await request.json()

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    // For free trials:
    subscription_data: {
      trial_period_days: 14,
    },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
    metadata: {
      userId, // Pass your user ID to connect Stripe customer to your user
    },
  })

  return NextResponse.json({ url: session.url })
}
```

Client-side:

```typescript
// In your pricing component
async function handleSubscribe(priceId: string) {
  const response = await fetch('/api/stripe/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId }),
  })

  const { url } = await response.json()
  window.location.href = url
}
```

---

## Step 4: Set Up the Customer Portal

The Customer Portal lets subscribers manage their own subscriptions (upgrade, downgrade, cancel, update payment method). This reduces your support burden dramatically.

```typescript
// app/api/stripe/portal/route.ts
import { stripe } from '@/lib/stripe'
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { getStripeCustomerId } from '@/lib/db' // your DB lookup function

export async function POST() {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Get the Stripe customer ID you stored when they subscribed
  const customerId = await getStripeCustomerId(userId)

  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
  })

  return NextResponse.json({ url: session.url })
}
```

Add a "Manage Subscription" button in your settings:

```typescript
async function handleManageSubscription() {
  const response = await fetch('/api/stripe/portal', { method: 'POST' })
  const { url } = await response.json()
  window.location.href = url
}
```

Enable the Customer Portal in Stripe Dashboard → Billing → Customer Portal.

---

## Step 5: Set Up Webhooks

Webhooks are how Stripe tells your app what happened. You must handle these to keep your database in sync with Stripe's state.

**Critical events to handle:**
- `checkout.session.completed` — user completed checkout
- `customer.subscription.created` — subscription started
- `customer.subscription.updated` — plan changed or trial ended
- `customer.subscription.deleted` — subscription cancelled
- `invoice.payment_failed` — payment failed (dunning flow)

```typescript
// app/api/stripe/webhook/route.ts
import { stripe } from '@/lib/stripe'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.CheckoutSession
      const userId = session.metadata?.userId
      const customerId = session.customer as string
      const subscriptionId = session.subscription as string

      // Save to your database
      await db.users.updateSubscription(userId, {
        stripeCustomerId: customerId,
        stripeSubscriptionId: subscriptionId,
        status: 'trialing', // or 'active' if no trial
        plan: 'pro', // determine from line items
      })
      break
    }

    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription
      await db.users.updateSubscriptionStatus(
        subscription.id,
        subscription.status
      )
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      await db.users.updateSubscriptionStatus(subscription.id, 'cancelled')
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice
      // Trigger dunning email sequence
      await sendPaymentFailedEmail(invoice.customer_email)
      break
    }
  }

  return NextResponse.json({ received: true })
}
```

**Set up your webhook endpoint in Stripe Dashboard:**
Dashboard → Developers → Webhooks → Add endpoint → `yourdomain.com/api/stripe/webhook`

**For local testing:**
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

---

## Step 6: Gate Features Behind Subscription

Check subscription status before allowing access to paid features:

```typescript
// proxy.ts (Next.js 16+; see https://nextjs.org/docs/messages/middleware-to-proxy) or in individual API routes
import { auth } from '@clerk/nextjs/server'
import { getUserSubscription } from '@/lib/db'

export async function requirePaidSubscription() {
  const { userId } = await auth()
  if (!userId) throw new Error('Unauthorized')

  const subscription = await getUserSubscription(userId)

  if (!subscription || !['active', 'trialing'].includes(subscription.status)) {
    throw new Error('Active subscription required')
  }

  return subscription
}
```

---

## Testing Your Integration

Before going live:

1. Use Stripe test card `4242 4242 4242 4242` for successful payments
2. Use card `4000 0000 0000 0341` for payment failures
3. Test the full flow: signup → checkout → subscription active → manage subscription → cancel
4. Verify webhook events are received and processed
5. Verify your database is updated correctly for each event

```bash
# Trigger test webhook events with Stripe CLI
stripe trigger checkout.session.completed
stripe trigger customer.subscription.deleted
stripe trigger invoice.payment_failed
```

---

## Handling Payment Failures (Dunning)

When a payment fails, Stripe retries automatically (you configure the schedule in Dashboard). But you should also:

1. Email the customer immediately when payment fails (Stripe can do this automatically)
2. Email a reminder before subscription cancellation
3. Offer a grace period (usually 7-14 days)
4. Provide an easy way to update their payment method (Customer Portal link)

Configure automatic dunning emails in Stripe Dashboard → Billing → Subscriptions and emails → Manage failed payments.

---

## Deliverable

- Stripe products and prices created
- Checkout session API route working
- Customer Portal API route working
- Webhooks configured and tested
- Feature gating based on subscription status
- Payment failure emails configured

---

## What's Next

Move to [Reduce Churn Before It Starts](reduce-churn.md) — because keeping customers is more valuable than acquiring them.
