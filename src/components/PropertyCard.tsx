import Image from 'next/image';
import furniture_solution from '../../public/furniture_solution.png';

const PropertyCard = () => {
  const property = {
    id: 'green-villas',
    imageUrl: furniture_solution,
    name: 'Green Villas',
    location: 'Sikanderpur, Gurgaon',
    rent: 25000,
    flatmates: 2,
  };

  return (
    <div className="property-card flex flex-col justify-between p-1 bg-white rounded-lg overflow-hidden shadow-md w-60 h-96">
      <div>
        <div className="relative w-full h-60">
          <Image
            src={property.imageUrl}
            alt={property.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-2">
          <h2 className="text-sm font-semibold">{property.name}</h2>
          <p className="text-xs text-gray-600">{property.location}</p>
          <div className="flex justify-between items-center  text-gray-600 text-xs border-t border-gray-300 pt-2">
            <p className="text-xs   rounded px-1">
              ₹{property.rent} /mnth
            </p>
            <p className="text-xs ">
              {property.flatmates} flatmates
            </p>
            
          </div>
        </div>
        <div className="pt-2 border-t border-gray-300"></div>
      </div>
      <div className=" border-gray-300 ">
        <button className="w-full bg-pink-500 hover:bg-pink-600 rounded-full px-2 py-2 text-white text-xs">
          Explore Similar Properties
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;

