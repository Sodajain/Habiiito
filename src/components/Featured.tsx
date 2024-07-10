"use client"
import PropertyCard from "./PropertyCard";

export default function Featured() {
    return (
        <div >
        <div className="flex flex-wrap justify-center gap-4">
        <p className="text-2xl font-bold">Featured Properties</p>
    </div>
        <div className="flex flex-wrap justify-center gap-4">
           
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
        </div>
        </div>
    );
}