"use client"

import * as React from "react"
import * as selectPrimitive from "@radix-ui/react-select"
import { cn } from "@/lib/utils"

const select = selectPrimitive.Root
const selectGroup = selectPrimitive.Group
const selectValue = selectPrimitive.Value

const selectTrigger = React.forwardRef<
  React.ElementRef<typeof selectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof selectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <selectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
    <selectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </selectPrimitive.Icon>
  </selectPrimitive.Trigger>
))
selectTrigger.displayName = selectPrimitive.Trigger.displayName

const selectContent = React.forwardRef<
  React.ElementRef<typeof selectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof selectPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <selectPrimitive.Portal>
    <selectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
        className
      )}
      {...props}
    >
      <selectPrimitive.Viewport className="p-1">
        {children}
      </selectPrimitive.Viewport>
    </selectPrimitive.Content>
  </selectPrimitive.Portal>
))
selectContent.displayName = selectPrimitive.Content.displayName

const selectItem = React.forwardRef<
  React.ElementRef<typeof selectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof selectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <selectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <selectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </selectPrimitive.ItemIndicator>
    </span>
    <selectPrimitive.ItemText>{children}</selectPrimitive.ItemText>
  </selectPrimitive.Item>
))
selectItem.displayName = selectPrimitive.Item.displayName

export {
  select,
  selectGroup,
  selectValue,
  selectTrigger,
  selectContent,
  selectItem,
}
