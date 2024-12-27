import * as React from "react"
import styles from "./Skeleton.module.scss"
import { cn } from "@/app/lib/utils"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline'
}

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(styles.skeleton, className)}
      {...props}
    />
  )
}

export { Skeleton } 