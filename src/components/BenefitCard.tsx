"use client";
import Image from 'next/image';
import furniture_solution from '../../public/furniture_solution.png';

const BenefitCard = () => {
  const benefit = {
    id: '1',
    imageUrl: furniture_solution,
    Benefit: 'Fully inspected with full reports',
    Description: 'who referred us further after using our services. who referred us further after using our services. who referred us further after using our services',

  };

  return (
    <div className="property-card flex flex-col justify-between p-1 bg-white rounded-lg overflow-hidden shadow-md ">
      <div>
        <div className="relative w-full h-60">
          <Image
            src={benefit.imageUrl}
            alt={benefit.Benefit}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-2">
          <h2 className="text-sm font-semibold">{benefit.Benefit}</h2>
          <p className="text-xs text-gray-600">{benefit.Description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;

