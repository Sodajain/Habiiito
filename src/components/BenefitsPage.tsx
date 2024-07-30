"use client";
import { useState } from "react";
import BenefitCard from "./BenefitCard";
import { Button } from "./ui/button";
import Switch from "./ui/switch";

export default function BenefitsPage() {
  const [isFlatmate, setIsFlatmate] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="flex justify-center mb-6">
        <div className="space-y-4">
          <Switch label="" onToggle={setIsFlatmate} />
        </div>
      </div>
      <div className="text-center mb-8">
        <p className="text-2xl text-[#FF2C61] font-bold">Enjoy Habiiito Benefits</p>
      </div>
      <div className="text-center mb-8">
        <p className="text-gray-700">
          Our end-to-end service handles everything from property visits to paperwork, including police verification and rental agreements, eliminating the typical hassles associated with renting.
        </p>
      </div>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isFlatmate ? (
          <>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-8 flex items-center justify-center text-gray-500">
              Placeholder for Find a Flatmate 1
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-8 flex items-center justify-center text-gray-500">
              Placeholder for Find a Flatmate 2
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-8 flex items-center justify-center text-gray-500">
              Placeholder for Find a Flatmate 3
            </div>
          </>
        ) : (
          <>
            <BenefitCard />
            <BenefitCard />
            <BenefitCard />
          </>
        )}
      </div>
      <div className="flex justify-center mb-6 p-4 space-x-4">
        <Button className="bg-[#FF2C61] hover:bg-pink-600 rounded-full px-8 py-3 text-white font-semibold">
          Browse Flats
        </Button>
        <Button className="bg-white hover:bg-pink-600 border border-[#FF2C61] rounded-full px-8 py-3 text-[#FF2C61] font-semibold">
          Learn more
        </Button>
      </div>
    </div>
  );
}
