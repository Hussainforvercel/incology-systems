
import PricingSection from "./Component/Pricing";
import FAQSection from "./Component/FAQsection";
import Integrations from "./Component/Integrations";
import BenefitsSection from "./Component/Benefit";
import ReviewSection from "./Component/Reviews";
import TeamSection from "./Component/OurAmazinteam";
import Carousel from "./Component/Carousel";

import WordpressSection from "./Component/Wordpressportfolio";
import MernSection from "./Component/Mernportfolio";
import MobileSection from "./Component/Mobileportfolio";


export default function Home() {
  return (
    <>
      <MernSection/>
      <WordpressSection />
      <MobileSection/>
      <BenefitsSection />
      <Carousel />
      <Integrations />
      <PricingSection />
      <FAQSection />
      <ReviewSection />
      <TeamSection />

    </>
  )
}