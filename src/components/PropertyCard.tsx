import Image from 'next/image';
import furniture_solution from '../../public/furniture_solution.png';

const PropertyCard = () => {

  // Hardcoded property data (replace with actual data fetching)
  const property = {
    id: 'green-villas', // Replace with a unique ID
    imageUrl: furniture_solution, // Replace with a placeholder image
    name: 'Green Villas, Sikanderpur, Gurgaon',
    rent: 25000,
    flatmates: 2,
  };

  return (
    <>
      <div className="border border-gray-300 bg-white shadow-lg rounded-lg p-4 mx-2 my-4 flex-shrink-0 transform transition-transform duration-300 hover:scale-105" style={{ width: '220px' }}>
        <Image
          src={property.imageUrl}
          alt={property.name}
          width={200}
          height={150}
          objectFit="cover"
          className="rounded-t-lg mb-2 cursor-pointer"
         
        />

        <div className="flex flex-col items-start">
          <h2 className="text-lg font-bold text-black cursor-pointer mb-1" >
            {property.name}
          </h2>
          <p className="text-md font-semibold text-black mb-1">{`Rent: ₹${property.rent}/month`}</p>
          <p className="text-gray-700 text-sm mb-4">{`${property.flatmates} flatmates`}</p>
        </div>

        <button
         
          className="bg-pink-500 hover:bg-pink-600 rounded-full px-4 py-2 text-white font-semibold self-center"
        >
          Explore Similar Properties
        </button>
      </div>

      
    </>
  );
};

export default PropertyCard;