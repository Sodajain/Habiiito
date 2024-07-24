"use client";
import furniture_solution from '../../public/furniture_solution.png';
import PropertyCard from "./PropertyCard";

interface Property {
  id: string;
  imageUrl: string;
  name: string;
  location: string;
  rent: number;
  flatmates: number;
}

export default function Featured() {
  const properties: Property[] = [
    {
      id: 'green-villas',
      imageUrl: furniture_solution.src,
      name: 'Green Villas',
      location: 'Sikanderpur, Gurgaon',
      rent: 25000,
      flatmates: 2,
    },
    {
      id: 'blue-homes',
      imageUrl: furniture_solution.src,
      name: 'Blue Homes',
      location: 'MG Road, Gurgaon',
      rent: 30000,
      flatmates: 3,
    },
    // Add more properties here
  ];

  return (
    <div className="w-full mx-auto px-8 py-10">
      <div className="text-center mb-8">
        <p className="text-2xl text-[#FF2C61] font-bold">Featured Properties</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
