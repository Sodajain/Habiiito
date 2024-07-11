"use client";
import PropertyCard from "./PropertyCard";

export default function Featured() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="text-center mb-8">
        <p className="text-2xl text-pink-500 font-bold">Featured Properties</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <PropertyCard />
        <PropertyCard /> {/* Repeat for additional PropertyCard components */}
      </div>
    </div>
  );
}