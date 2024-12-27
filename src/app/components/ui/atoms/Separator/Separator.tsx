"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import styles from "./Separator.module.scss"
import { cn } from "@/app/lib/utils"

export interface SeparatorProps extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> {
  orientation?: "horizontal" | "vertical"
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        styles.separator,
        orientation === "horizontal" ? styles.horizontal : styles.vertical,
        className
      )}
      {...props}
    />
  )
)

Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator } 