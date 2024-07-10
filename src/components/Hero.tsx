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

  const images = [hero_image, furniture_solution, hero_image, furniture_solution, hero_image];

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

      {/* Hero content container with vertical centering */}
      <div className="relative z-10 flex flex-col h-full justify-center">
        <div className="flex-grow flex items-center px-6 md:px-12">
          <div className="max-w-2xl">
            {/* Hero title with clear and concise message */}
            <h2 className="text-4xl md:text-5xl text-white font-semibold mb-4">Hassle-Free Living Starts with Habiiito</h2>
            {/* Hero description with improved clarity */}
            <p className="text-md md:text-lg text-gray-200 mb-6">
              Find the perfect flatmates with our trusted, simplified, and tech-enabled full-stack rental solutions.
            </p>
            {/* Call to action button with clear label */}
            <Button asChild className="list-property-button bg-pink-500 hover:bg-pink-600 rounded-full px-8 py-3 text-white font-semibold">
              <Link href="/services/tenant">List a Property</Link>
            </Button>
          </div>
        </div>

        {/* Responsive carousel container with bottom and right positioning */}
        <div className="absolute bottom-8 right-8 w-full max-w-3xl">
          <Carousel className="overflow-visible rounded-lg">
            {/* Carousel content with left margin for better alignment */}
            <CarouselContent className="-ml-2 flex items-center">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:basis-1/5 lg:basis-1/5">
                  <div className="relative aspect-[3/4] transition-all duration-300 ease-in-out">
                    {/* Image container with active slide highlighting and smooth transition */}
                    <div
                      className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                        index === activeIndex ? 'scale-125 z-10' : 'scale-100 z-0'
                      } ${index === activeIndex ? 'opacity-100' : 'opacity-60'}`}
                    >
                      <div className="w-full h-full p-1">
                        <div className="w-full h-full border-2 border-white rounded-lg overflow-hidden">
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
