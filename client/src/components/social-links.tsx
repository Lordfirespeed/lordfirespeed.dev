import type * as React from "react"

import { type SocialNetworkProfile, socials } from "@/config/socials"
import { cn } from "@/lib/utils"

function SocialLink({ profile: { href, icon: ProfileIcon } }: { profile: SocialNetworkProfile }) {
  return (
    <a href={href}>
      <ProfileIcon className="size-12" />
    </a>
  )
}

export function SocialLinks({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <article className={cn("flex flex-row space-x-5", className)} {...props}>
      {socials.map((profile) => (
        <SocialLink key={profile.slug} profile={profile} />
      ))}
    </article>
  )
}
