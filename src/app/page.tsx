import BenefitsPage from "@/components/BenefitsPage";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import UserAndJourney from "@/components/UsersAndJourney";

export default function Home() {
  return (
    <main>
      <Hero />
      
      <Featured />
     
      <UserAndJourney/>

      <BenefitsPage/>
    
    </main>
  );
}
