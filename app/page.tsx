import Slider from "./Component/Slider";
import TestimonialSection from "./Component/TestimonialSection";
import AllFeatureSection from "./Component/AllFeatureSection";
import ProcessSection from "./Component/ProcessSection";
import ServiceSection2 from "./Component/ServiceSection2";
import ComparisionSection from "./Component/ComparisionSection";
import ReachOut from "./Component/ReachOut";
import ServiceSection from "./Component/ServiceSection";

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



function Home() {
  return (
    <>

      <Slider />
      <TestimonialSection />
      <BenefitsSection />
      <ServiceSection />
      <ServiceSection2 />
      <AllFeatureSection />
      <ProcessSection />
      <Carousel />
      <Integrations />
      <ReviewSection />
      <PricingSection />
      <FAQSection />
      <ComparisionSection />
      <TeamSection />
      <ReachOut />



      <MernSection />
      <WordpressSection />
      <MobileSection />
    </>
  );
}

export default Home
