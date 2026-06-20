import * as React from "react"
import { cn } from "@/components/ui/Button"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-[2rem] bg-foreground/5 border border-border",
        hoverEffect && "transition-transform duration-300 hover:bg-foreground/10 hover:-translate-y-1 hover:shadow-lg hover:border-foreground/20",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent rounded-[2rem] pointer-events-none" />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </div>
  )
}
GlassCard.displayName = "GlassCard"
