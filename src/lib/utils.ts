import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Sports",
    href: "/sports",
  },
  {
    name: "Live Betting",
    href: "/live-betting",
  },
  {
    name: "Poker",
    href: "/poker",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
  {
    name: "FAQs",
    href: "/faqs",
  },
];
