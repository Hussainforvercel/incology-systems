<<<<<<< HEAD
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

=======

import Navbar from "./Component/Navbar";
import Section1 from "./Component/Section1";
import Section2 from "./Component/Section2";
import Section3 from "./Component/Section3";
import Section4 from "./Component/Section4";
import Section5 from "./Component/Section5";



function Home() {
  return (
    <>
<Navbar />
<Section1 />
<Section2 />
<Section3 />
<Section4 />
<Section5 />


    </>
>>>>>>> e08982a0126c00578e0c2d6dfcb1aeb9dc232c61
  );
}

export default Home