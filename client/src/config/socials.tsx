import type * as React from "react"

import { DiscordIcon } from "@/components/icons/discord"
import { GitHubIcon } from "@/components/icons/github"
import { NPMIcon } from "@/components/icons/npm"
import { NuGetIcon } from "@/components/icons/nuget"
import { PyPIIcon } from "@/components/icons/pypi"

export type SocialNetworkProfile = {
  slug: string
  icon: React.FC<React.HTMLAttributes<Element>>
  href: string
}

export const socials: SocialNetworkProfile[] = [
  {
    slug: "npm",
    icon: NPMIcon,
    href: "https://www.npmjs.com/~lordfirespeed",
  },
  {
    slug: "pypi",
    icon: PyPIIcon,
    href: "https://pypi.org/user/Lordfirespeed/",
  },
  {
    slug: "github",
    icon: GitHubIcon,
    href: "https://github.com/lordfirespeed",
  },
  {
    slug: "discord",
    icon: DiscordIcon,
    href: "https://discord.com/users/290259615059279883",
  },
  {
    slug: "nuget",
    icon: NuGetIcon,
    href: "https://www.nuget.org/profiles/lordfirespeed",
  },
]
