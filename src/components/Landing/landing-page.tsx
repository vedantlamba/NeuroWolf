import React from "react";
import Navbar from "./Navbar/navbar";
import Hero from "./Hero/hero";
import ProblemSection from "./ProblemSection/problem-section";
import SolutionSection from "./SolutionSection/solution-section";
import HowItWorksSection from "./HowItWorksSection/how-it-works";
import Testimonial from "./Testimonial/testimonial";
import PricingSection from "./PricingSection/pricing-section";
import Faqs from "./FAQ/faq";
import Footer from "./Footer/footer";

function LandingPage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <ProblemSection />
      </div>
      <div>
        <SolutionSection />
      </div>
      <div>
        <HowItWorksSection />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <PricingSection />
      </div>
      <div>
        <Faqs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
