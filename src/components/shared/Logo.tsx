import Link from "next/link";
import Image from "next/image";

import { useTheme } from "next-themes";

import logoDark from "../../../public/logo-dark.svg";
import logoLight from "../../../public/logo-light.svg";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <h1 className="font-bold">The Beyond</h1>
    </Link>
  );
}
