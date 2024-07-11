"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import furniture_solution from "../../public/furniture_solution.png";
import hero_image from "../../public/hero_image.png";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [hero_image, furniture_solution, hero_image];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="hero relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${hero_image.src})` }}>
      {/* Background overlay for dimming effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero content container */}
      <div className="absolute bottom-8 left-2 right-2 flex justify-between items-end px-6 md:px-12">
        {/* Text container */}
        <div className="max-w-2xl mb-8">
          {/* Hero title */}
          <h2 className="text-4xl md:text-5xl text-white font-semibold mb-4">
            Hassle-Free Living Starts with Habiiito
          </h2>
          {/* Hero description */}
          <p className="text-md md:text-lg text-gray-200 mb-6">
            Find the perfect flatmates with our trusted, simplified, and tech-enabled full-stack rental solutions.
          </p>
          {/* Call to action button */}
          <Button asChild className="list-property-button bg-pink-500 hover:bg-pink-600 rounded-full px-8 py-3 text-white font-semibold">
            <Link href="/services/tenant">List a Property</Link>
          </Button>
        </div>

        {/* Carousel container */}
        <div className="w-full max-w-3xl mb-8">
          <Carousel className="overflow-visible h-full rounded-lg">
            {/* Carousel content */}
            <CarouselContent className="-ml-2 flex items-center">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:basis-1/5 lg:basis-1/5">
                  <div className="relative aspect-[9/16] transition-all duration-300 ease-in-out">
                    {/* Image container with active slide highlighting and smooth transition */}
                    <div
                      className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                        index === activeIndex ? 'scale-105 z-10 border-white rounded-lg' : 'scale--30 z-0'
                      } ${index === activeIndex ? 'opacity-100 border-white' : 'opacity-60'}`}
                    >
                      <div className="w-full h-full p-2">
                        <div className="w-full h-full border-2 border-white rounded-lg">
                          <div className="w-full h-full relative">
                            {/* Optimized image using Next.js Image component */}
                            <Image
                              src={image}
                              alt={`Slide ${index + 1}`}
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </main>
  );
}
