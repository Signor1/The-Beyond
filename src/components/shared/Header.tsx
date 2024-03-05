"use client";
import MaxWrapper from "@/components/shared/MaxWrapper";
import { ModeToggle } from "@/components/shared/ModeToggle";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNavToggler } from "./MobileNavToggler";
import { useEffect, useState } from "react";
import { cn, navLinks } from "@/lib/utils";
import { Button } from "../ui/button";

export default function Header() {
  const pathname = usePathname();

  const [navBarColor, setNavBarColor] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavBarColor(true) : setNavBarColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div className={`sticky top-0 inset-x-0 z-50 w-full py-3 lg:pt-5 ${navBarColor ? "bg-background" : "bg-transparent"} transition-all`}>
      <MaxWrapper className="h-full w-full flex items-center justify-between gap-10">
        <Logo />

        <div className="h-14 hidden bg-background lg:flex items-center justify-center gap-6 px-6">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={cn(
                "text-base font-normal text-muted-foreground  transition",
                {
                  "text-bridgeRed": link.href == pathname,
                  "hover:text-foreground": link.href != pathname,
                }
              )}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Button>Connect Wallet</Button>
          <div className="flex items-center justify-end gap-3 w-full max-w-[160px]">
            <ModeToggle />
          </div>
          <div className="lg:hidden">
            <MobileNavToggler />
          </div>
        </div>

      </MaxWrapper>
    </div>
  );
}
