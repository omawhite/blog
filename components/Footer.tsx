import { Clapperboard, Github, Linkedin } from "lucide-react";
import type React from "react";
import { Button } from "@/components/ui/button";

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/omawhite",
    icon: <Github />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/omawhite",
    icon: <Linkedin />,
  },
  {
    label: "Letterboxd",
    href: "https://letterboxd.com/omawhite",
    icon: <Clapperboard />,
  },
];

export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-4 py-8 mt-16 border-t border-border">
      <div className="flex justify-center gap-1">
        {socialLinks.map((link) => (
          <Button key={link.label} variant="ghost" size="icon-sm" asChild>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          </Button>
        ))}
      </div>
    </footer>
  );
}
