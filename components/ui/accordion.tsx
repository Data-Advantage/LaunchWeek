'use client'

import * as React from 'react'
import * as Accordion from '@base-ui/react/accordion'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'

const AccordionRoot = Accordion.Root

const AccordionItem = Accordion.Item

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Accordion.Trigger>
>(({ className, children, ...props }, ref) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </Accordion.Trigger>
  </Accordion.Header>
))
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Accordion.Panel>
>(({ className, children, ...props }, ref) => (
  <Accordion.Panel
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[closed]:animate-accordion-up data-[open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </Accordion.Panel>
))
AccordionContent.displayName = 'AccordionContent'

export { AccordionRoot as Accordion, AccordionItem, AccordionTrigger, AccordionContent }
