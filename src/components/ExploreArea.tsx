"use client";

import Image from 'next/image';
import Loc1 from '../../public/Loc1.png';
import Loc2 from '../../public/Loc2.png';
import Loc3 from '../../public/Loc3.png';
import { Button } from './ui/button';

const images = [Loc1, Loc2, Loc3];
const repeatedImages = [...images, ...images]; // Double the images array for repeating effect

export default function ExploreArea() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
            <div className="text-center mb-8">
                <p className="text-2xl md:text-3xl text-[#FF2C61] font-bold">Explore the Area</p>
                <p className="text-gray-600">Discover handpicked properties in your desired location</p>
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                <p className='text-[#FF2C61] border-2 border-[#FF2C61] rounded-full px-3 py-1 text-xs md:text-sm'>1 BHK</p>
                <p className='text-[#FF2C61] border-2 border-[#FF2C61] rounded-full px-3 py-1 text-xs md:text-sm'>2 BHK</p>
                <p className='text-[#FF2C61] border-2 border-[#FF2C61] rounded-full px-3 py-1 text-xs md:text-sm'>3 BHK</p>
                <p className='text-[#FF2C61] border-2 border-[#FF2C61] rounded-full px-3 py-1 text-xs md:text-sm'>4 BHK</p>
                <p className='text-[#FF2C61] border-2 border-[#FF2C61] rounded-full px-3 py-1 text-xs md:text-sm'>Co-living</p>
                <p className='text-[#FF2C61] border-2 border-[#FF2C61] rounded-full px-3 py-1 text-xs md:text-sm'>Pre-occupied</p>
                <p className='text-[#FF2C61] border-2 border-[#FF2C61] rounded-full px-3 py-1 text-xs md:text-sm'>Gated Society</p>
                <p className='text-[#FF2C61] border-2 border-[#FF2C61] rounded-full px-3 py-1 text-xs md:text-sm'>1 RK</p>
            </div>
            
            {/* Image Carousel */}
            <div className="relative overflow-hidden mb-8">
                <div className="flex h-[300px] md:h-[400px] lg:h-[500px] w-full space-x-0.5 md:space-x-4">
                    {repeatedImages.map((image, index) => (
                        <div key={index} className="w-full md:w-1/3 flex-shrink-0">
                            <div className="relative w-full pb-[100%] md:pb-[177.78%] bg-white border border-white rounded-lg overflow-hidden">
                                <div className="absolute inset-0">
                                    <Image
                                        src={image}
                                        alt={`Location ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Cards */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-0 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start h-auto md:h-72 w-full">
                        <div className="w-full  p-3 md:w-1/2 md:pr-4 p-3">
                            <p className="text-md md:text-lg font-bold mb-2">For Landlord</p>
                            <p className="text-gray-600 text-left mb-4 text-xs md:text-sm">
                                Get verified tenants who treat your property as a home away from home.
                            </p>
                            <div className="mt-auto">
                                <Button className="bg-[#FF2C61] hover:bg-pink-600 rounded-full px-4 py-2 text-white text-xs md:text-sm">
                                    List a Property
                                </Button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 h-24 md:h-full bg-gray-200 rounded-md mt-4 md:mt-0"></div>
                    </div>
                    <div className="bg-gray-100 p-0 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start h-auto md:h-72 w-full">
                        <div className="w-full p-3 md:w-1/2 md:pr-4 p-3">
                            <p className="text-md md:text-lg font-bold mb-2">For Flat</p>
                            <p className="text-gray-600 text-left mb-4 text-xs md:text-sm">
                                Get perfect verified flatmates who match your vibe & lifestyle.
                            </p>
                            <div className="mt-auto">
                                <Button className="bg-[#FF2C61] hover:bg-pink-600 rounded-full px-4 py-2 text-white text-xs md:text-sm">
                                    Find a Flatmate
                                </Button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 h-24 md:h-full bg-gray-200 rounded-md mt-4 md:mt-0"></div>
                    </div>
                    <div className="bg-gray-100 p-0 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start h-auto md:h-72 w-full">
                        <div className="w-full p-3 md:w-1/2 md:pr-4 p-3">
                            <p className="text-md md:text-lg font-bold mb-2">For Flatmate</p>
                            <p className="text-gray-600 text-left mb-4 text-xs md:text-sm">
                                Get perfect verified flatmates who match your vibe & lifestyle.
                            </p>
                            <div className="mt-auto">
                                <Button className="bg-[#FF2C61] hover:bg-pink-600 rounded-full px-4 py-2 text-white text-xs md:text-sm">
                                    Find a Flatmate
                                </Button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 h-24 md:h-full bg-gray-200 rounded-md mt-4 md:mt-0"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
