import * as React from "react"
import styles from "./Input.module.scss"
import { cn } from "@/app/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'outline'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(styles.input, className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input } 