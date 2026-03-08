'use client'

import * as React from 'react'

/**
 * Minimal Slot implementation — merges parent props onto a single child element.
 * Used as a drop-in replacement for @radix-ui/react-slot.
 */
const Slot = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }
>(({ children, ...slotProps }, forwardedRef) => {
  if (!React.isValidElement(children)) return null

  const childProps = children.props as Record<string, unknown>
  const merged: Record<string, unknown> = { ...slotProps }

  for (const key of Object.keys(childProps)) {
    const slotVal = merged[key]
    const childVal = childProps[key]

    if (key === 'className') {
      merged.className = [slotVal, childVal].filter(Boolean).join(' ')
    } else if (key === 'style') {
      merged.style = { ...(slotVal as object), ...(childVal as object) }
    } else if (key.startsWith('on') && typeof childVal === 'function') {
      merged[key] =
        typeof slotVal === 'function'
          ? (...args: unknown[]) => {
              ;(slotVal as (...a: unknown[]) => void)(...args)
              ;(childVal as (...a: unknown[]) => void)(...args)
            }
          : childVal
    } else {
      merged[key] = childVal
    }
  }

  return React.cloneElement(children, { ...merged, ref: forwardedRef })
})
Slot.displayName = 'Slot'

export { Slot }
