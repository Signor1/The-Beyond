import Image from "next/image";
import Hero from "../../../public/hero.jpg";


export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center">
      <div className="w-full relative h-[90vh] before:w-full before:h-full before:absolute before:inset-x-0 before:top-0 before:bg-zinc-900/50">
        <Image src={Hero} alt="Beyond Logo" className="w-full h-full object-cover object-top" />
      </div>
    </main>
  );
}
