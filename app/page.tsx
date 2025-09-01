import Image from "next/image";
import PricingSection from "./Component/Pricing";
import FAQSection from "./Component/FAQsection";
import Integrations from "./Component/Integrations";
import BenefitsSection from "./Component/Benefit";
// import BenefitsSection from "./Component/Benefits";
export default function Home() {
  return (
    <>
    {/* <Benefits/> */}
    <BenefitsSection/>
      <Integrations/>
    <PricingSection/>
    <FAQSection/>
  
    </>

  );
}
