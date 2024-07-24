"use client";

import Image from 'next/image';
import illustration from '../../public/illustration.png';

export default function HowItWorks() {
    return (
        <div className="max-w-7xl mx-auto px-8 py-10">
            <div className="text-center mb-8">
                <p className="text-2xl text-[#FF2C61] font-bold">How it works</p>
                <p className="text-gray-700">   Our end-to-end service handles everything from property visits to paperwork, including police verification and rental agreements, eliminating the typical hassles associated with renting.      </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <Image src={illustration} alt="illustration" className="w-full" />
                    <p className='text-black-500 text-2xl font-bold'>Choose from the best 
                    properties</p>
                    <p className='text-black-500 '>we give you best access and stuuff , we give you best access and stuuff </p>
                </div>
                <div className="text-center">
                    <Image src={illustration} alt="illustration" className="w-full" />
                    <p className='text-black-500 text-2xl font-bold'>Choose from the best 
                    properties</p>
                    <p className='text-black-500 '>we give you best access and stuuff , we give you best access and stuuff </p>
                </div>
                <div className="text-center">
                    <Image src={illustration} alt="illustration" className="w-full" />
                    <p className='text-black-500 text-2xl font-bold'>Choose from the best 
                    properties</p>
                    <p className='text-black-500 '>we give you best access and stuuff , we give you best access and stuuff </p>
                </div>
            </div>
        </div>
    );
}
