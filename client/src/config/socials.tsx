import type * as React from "react"

import { GitHubIcon } from "@/components/icons/github"

export type SocialNetworkProfile = {
  slug: string
  icon: React.FC<React.HTMLAttributes<Element>>
  href: string
}

export const socials: SocialNetworkProfile[] = [
  {
    slug: "github",
    icon: GitHubIcon,
    href: "https://github.com/lordfirespeed",
  },
]
