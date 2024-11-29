import type * as React from "react"

import { type VariantProps, cva } from "class-variance-authority"

export const iconVariants = cva("icon", {
  variants: {
    variant: {
      brand: "icon-brand",
      "brand-hover": "icon-brand-hover",
      inherit: "",
    },
  },
  defaultVariants: {
    variant: "inherit",
  },
})

export type IconVariantProps = VariantProps<typeof iconVariants>

export type IconProps = React.HTMLAttributes<SVGElement> & IconVariantProps
