import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export interface NavigationLink {
  href: string
  label: string
  external?: boolean
}

interface SiteNavigationProps {
  links: NavigationLink[]
  className?: string
}

export function SiteNavigation({ links, className }: SiteNavigationProps) {
  return (
    <NavigationMenu className={cn("w-full", className)}>
      <NavigationMenuList>
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            {link.external ? (
              <NavigationMenuLink
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={navigationMenuTriggerStyle()}
              >
                {link.label}
              </NavigationMenuLink>
            ) : (
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {link.label}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}