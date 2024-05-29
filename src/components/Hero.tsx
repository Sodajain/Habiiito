import Image from "next/image";
import Link from "next/link";
import hero_image from "../../public/hero_image.png";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 items-center px-12 md:px-36">
      <div className="flex flex-col gap-4 order-2 md:order-1 my-12 ">
        <p className="text-2xl font-bold">Gurgaon's most reliable</p>
        <p className="text-4xl text-primary font-semibold">End to end </p>
        <p className="text-4xl text-primary font-semibold">Renting Assistance</p>
        <p className="text-md">
         A modern real estate services providing a seamless househunting experience
        </p>
        <Button
          className="bg-background-dark hover:bg-background-dark/90 rounded-full w-fit px-12"
          asChild
        >
          <Link href="/services/tenant">Explore</Link>
        </Button>
      </div>
      <div className="flex justify-center order-1 md:order-2 my-12">
        <Image
          src={hero_image}
          alt="hero"
          width={500}
          height={500}
          className="max-h-[500px]"
        />
      </div>
    </main>
  );
}
