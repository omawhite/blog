import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export interface NavigationLink {
  href: string;
  label: string;
  external?: boolean;
}

interface SiteNavigationProps {
  links: NavigationLink[];
  className?: string;
}

export function SiteNavigation({ links, className }: SiteNavigationProps) {
  return (
    <NavigationMenu className={cn("w-full", className)} viewport={false}>
      <NavigationMenuList className="flex-1">
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
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href={link.href}>{link.label}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
