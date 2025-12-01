import Link from "next/link";
import ColorModeToggle from "./ColorModeToggle";

interface NavbarLinkValue {
  key: string;
  label: string;
  href: string;
}
interface NavbarProps {
  links: NavbarLinkValue[];
}

export default function Navbar({ links }: NavbarProps) {
  return (
    <div className="flex flex-row justify-between md:flex p-4">
      <nav className="space-x-8 self-center flex flex-row items-center">
        {links.map((link) => (
          <Link href={link.href} key={link.key}>
            {link.label}
          </Link>
        ))}
      </nav>
      <ColorModeToggle />
    </div>
  );
}
