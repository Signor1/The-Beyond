import Link from "next/link";
import { useTheme } from "next-themes";


export default function Logo() {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <h1 className="font-bold capitalize text-2xl from-red-500 to-amber-500 bg-gradient-to-r bg-clip-text text-transparent">BetBit</h1>
    </Link>
  );
}
