import { Button } from "./ui/button";

export default function Dashboard() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 mt-24">
      <div className="flex flex-col gap-6 px-6 md:px-24 lg:px-48"> 
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">All under one roof with </p>
          <p className="text-4xl font-semibold text-primary">Habiiito </p>
        </div>

        <p className="text-sm text-gray-600">
         Get Started! 
        </p>
        <div className="flex gap-2">
          <Button className="w-full bg-background-dark hover:bg-background-dark/80 transform transition-all duration-300 hover:scale-105">
           <a href="/services/lister">List Property</a>
          </Button>
          <Button className="w-full bg-background-dark hover:bg-background-dark/80 transform transition-all duration-300 hover:scale-105">
           <a href="/services/tenant">Seek Property</a> 
          </Button>
        </div>
      </div>
      <div></div>
    </main>
  );
}
