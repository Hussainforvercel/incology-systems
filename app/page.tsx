import Slider from "./Component/Slider";
import TestimonialSection from "./Component/TestimonialSection";
import AllFeatureSection from "./Component/AllFeatureSection";
import ProcessSection from "./Component/ProcessSection";
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
import ContactSection from "./Component/Contactsection";

function Home() {
  return (
    <>
      <Slider />
      <TestimonialSection />

      <MernSection />
      <WordpressSection />
      <MobileSection />

      <BenefitsSection />
      <ServiceSection />
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

    </>
  );
}

export default Home
