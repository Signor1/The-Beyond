"use client";
import MaxWrapper from "@/components/shared/MaxWrapper";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNavToggler } from "./MobileNavToggler";
import { cn, navLinks } from "@/lib/utils";
import { Button } from "../ui/button";

export default function Header() {
  const pathname = usePathname();


  return (
    <div className={`sticky top-0 inset-x-0 z-50 w-full py-5 md:py-4 bg-zinc-900 transition-all flex justify-center items-center`}>
      <MaxWrapper className="h-full w-full flex items-center justify-between gap-10">
        <Logo />

        <div className="h-14 hidden lg:flex items-center justify-center gap-6 px-6">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={cn(
                "text-base font-normal text-zinc-200   transition",
                {
                  "from-red-500 to-amber-500 bg-gradient-to-r bg-clip-text text-transparent": link.href == pathname,
                  "hover:text-amber-500": link.href != pathname,
                }
              )}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Button className=" bg-gradient-to-tr from-red-500 to-amber-500">Connect Wallet</Button>
          <div className="lg:hidden">
            <MobileNavToggler />
          </div>
        </div>

      </MaxWrapper>
    </div>
  );
}
