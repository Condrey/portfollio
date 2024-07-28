"use client";

import { cn } from "@/lib/utils";
import {
  HomeIcon,
  InfoIcon,
  LucideIcon,
  MessageCircleIcon,
} from "lucide-react";
import Link from "next/link";
import { badgeVariants } from "../ui/badge";
import { usePathname } from "next/navigation";

export type NavLink = { name: string; href: string; icon: LucideIcon };

export default function NavLinks({
  showIcons = false,
}: {
  showIcons?: boolean;
}) {
  const links: NavLink[] = [
    { name: "About", href: "/about", icon: InfoIcon },
    { name: "Social Media", href: "/social", icon: MessageCircleIcon },
  ];
  const homeLink: NavLink = { name: "Home", href: "/", icon: HomeIcon };
  const pathName = usePathname();
  const isHome = pathName === "/";
  return (
    <nav className="space-x-4 font-medium text-foreground/50">
      <Link
        href={homeLink.href}
        className={cn(
          badgeVariants({
            variant: isHome ? "secondary" : "ghost",
            className: "space-x-2 rounded-full px-3 py-1 text-sm uppercase",
          }),
        )}
      >
        <HomeIcon className={cn(!showIcons && "hidden")} />
        <span>{homeLink.name}</span>
      </Link>
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = pathName.startsWith(link.href) && !isHome;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              badgeVariants({
                variant: isActive ? "secondary" : "ghost",
                className: "space-x-2 rounded-full px-3 py-1 text-sm uppercase",
              }),
            )}
          >
            <Icon className={cn(!showIcons && "hidden")} />{" "}
            <span>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
