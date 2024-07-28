import logo from "@/assets/logo.svg";
import Image from "next/image";
import AIChatBoxButton from "./ai-chat-button";
import NavLinks from "./nav-links/nav-links";

export default function Navbar() {
  return (
    <header className=" sticky top-0 z-50  bg-background/50 px-4  backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 border-b border-border/50 p-4">
        <Image src={logo} alt="Website Logo" height={75} width={75} />

        <NavLinks />

        <div className="flex items-center gap-4">
          <AIChatBoxButton />
        </div>
      </div>
    </header>
  );
}
