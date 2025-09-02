
import Image from "next/image";
// inshara
import Navbar from "./Component/Navbar";
import Section1 from "./Component/Section1";
import Section2 from "./Component/Section2";
import Section3 from "./Component/Section3";
import Section4 from "./Component/Section4";
import Section5 from "./Component/Section5";


import PricingSection from "./Component/Pricing";
import FAQSection from "./Component/FAQsection";
import Integrations from "./Component/Integrations";
import BenefitsSection from "./Component/Benefit";
import ReviewSection from "./Component/Reviews";
import TeamSection from "./Component/OurAmazinteam";
import Carousel from "./Component/Carousel";

export default function Home() {
  return (
    <>

      <Navbar />
      <Section1 />
      <Section2 />
      <BenefitsSection />
      <Section3 />
      <Section4 />
        <Carousel/>
      <Section5 />
    
      
      <Integrations />
      <PricingSection />
      <FAQSection />
       <ReviewSection/>
       <TeamSection/>
    </>
)
}