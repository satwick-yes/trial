import { clsx } from "clsx"
import React from "react"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  //
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(
        "bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700 shadow-sm",
        className
      )} {...props} />
    )
  }
)
Card.displayName = "Card"

export { Card }