"use client";
import BenefitCard from "./BenefitCard";
import { Button } from "./ui/button";

export default function BenefitsPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="flex justify-center mb-6">
        <Button className="px-6 py-3 mr-2 bg-pink-500 text-white rounded-t-md focus:outline-none">
          Find a Flat
        </Button>
        <Button className="px-6 py-3 ml-2 bg-gray-200 text-gray-700 rounded-t-md focus:outline-none">
          Find a Flatmate
        </Button>
      </div>
      <div className="text-center mb-8">
        <p className="text-2xl text-pink-500 font-bold">Enjoy Habiiito Benefits</p>
      </div>
      <div className="text-center mb-8">
        <p className="text-gray-700">
          Our end-to-end service handles everything from property visits to paperwork, including police verification and rental agreements, eliminating the typical hassles associated with renting.
        </p>
      </div>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BenefitCard />
        <BenefitCard />
        <BenefitCard />
      </div>
      <div className="flex justify-center mb-6 p-4 space-x-4">
        <Button className="bg-pink-500 hover:bg-pink-600 rounded-full px-8 py-3 text-white font-semibold">
          Browse Flats
        </Button>
        <Button className="bg-pink-500 hover:bg-pink-600 rounded-full px-8 py-3 text-white font-semibold">
        Learn more
        </Button>
      </div>


    </div>
  );
}
