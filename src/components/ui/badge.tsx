import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none ",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary50 text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary/50 text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive/50 text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        ghost: "text-foreground/50 border-transparent hover:bg-secondary/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
