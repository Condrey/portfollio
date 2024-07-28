"use client";
import { Button } from "@/components/ui/button";
import { H2, HeadingWide } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import {
  CursorArrowIcon,
  DesktopIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { ClassValue } from "clsx";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";

export default function Persona() {
  const [index, setIndex] = useState(0);
  const platforms: {
    name: string;
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
    description: string;
    linkName: string;
    linkHref: string;
    customClass: ClassValue;
  }[] = [
    {
      name: "Multi-Platform Apps",
      icon: DesktopIcon,
      description: "Applications for Windows, Linux and MacOS",
      linkName: "See Projects",
      linkHref: "projects#desktop",
      customClass: "",
    },
    {
      name: "Native Apps",
      icon: MobileIcon,
      description: "Apps that run on Android and iOS",
      linkName: "View Apps",
      linkHref: "projects#native",
      customClass: "",
    },

    {
      name: "Web Apps",
      icon: CursorArrowIcon,
      description: "Foolproof front-end and ack-end websites",
      linkName: "Check All",
      linkHref: "projects#native",
      customClass: "",
    },
  ];
  return (
    <section
      className={cn(
        index === 0
          ? " from-yellow-600/30 "
          : index === 1
            ? " has-[:hover]:from-fuchsia-700/25"
            : index === 2
              ? "has-[:hover]:from-teal-700/25"
              : "has-[:hover]:from-lime-700/25",
        " relative flex flex-col items-center justify-center bg-gradient-radial to-100% py-12",
      )}
    >
      <div className="absolute h-full w-full  bg-gradient-to-b from-background via-transparent to-background to-[99%]"></div>
      {/* credentials  */}
      <section className="">
        <HeadingWide
          className={cn(
            "bg-gradient-to-r from-yellow-300 from-5% to-yellow-300 to-95% bg-clip-text pb-6 text-center text-transparent opacity-90",
            index === 0
              ? "via-primary"
              : index === 1
                ? "via-fuchsia-800"
                : index === 2
                  ? "via-teal-800"
                  : "via-lime-800",
          )}
        >
          Coundrey James Ogwang
        </HeadingWide>
      </section>
      {/* platforms  */}
      <div className="mx-auto grid w-full max-w-5xl grid-cols-3 gap-2 ">
        {platforms.map((platform, placeHolder) => {
          const Icon = platform.icon;
          const numbering = placeHolder + 1;
          return (
            <Link
              onMouseOver={() => setIndex(numbering)}
              onMouseLeave={() => setIndex(0)}
              key={placeHolder}
              href={platform.linkHref}
              className={cn(
                " group flex cursor-pointer flex-col items-center justify-between gap-3 rounded-md bg-foreground/10 px-4 py-8  backdrop-blur-sm transition-all hover:scale-[101%] hover:bg-foreground/25  lg:rounded-none lg:first:rounded-s-3xl lg:last:rounded-e-3xl",
                numbering === 1
                  ? "hover:bg-gradient-to-tr hover:from-fuchsia-800/20 "
                  : numbering === 2
                    ? "hover:bg-gradient-to-t hover:from-teal-800/25 "
                    : "hover:bg-gradient-to-tl hover:from-lime-800/20",
              )}
            >
              <section className="flex flex-col space-y-3 text-center ">
                <H2 className="flex justify-center gap-2">
                  {platform.name}
                  {platform.icon !== undefined && (
                    <Icon className="text-foreground/30" />
                  )}
                </H2>
                <span className="text-foreground/50">
                  {platform.description}
                </span>
              </section>
              <section>
                <Button
                  size={"lg"}
                  className={cn(
                    "flex gap-2 bg-foreground text-accent group-hover:text-foreground",
                    numbering === 1
                      ? "group-hover:bg-fuchsia-400  "
                      : numbering === 2
                        ? "group-hover:bg-teal-400 "
                        : "group-hover:bg-lime-400",
                  )}
                >
                  <span>{platform.linkName}</span>
                  <ArrowRight className="-rotate-45 text-xs text-background/50 opacity-55  group-hover:text-foreground" />
                </Button>
              </section>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
