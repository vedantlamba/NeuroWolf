import React from "react";
import BentoCards from "./bento-cards";

function SolutionSection() {
  return (
    <section className="py-16 px-4 md:px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto text-wrap">
        <div className="text-center mb-10">
          <div className="inline-block">
            <span className="text-violet-500 text-sm font-semibold tracking-wide uppercase px-3 py-1 rounded-full">
              Solution
            </span>
          </div>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-balance">
            Empower Your Business with AI Workflows.
          </h2>
          <p className="text-lg md:text-balance pt-5 text-center md:max-w-[80%] mx-auto leading-relaxed text-gray-500">
            Generic AI tools won't suffice. Our platform is purpose-built to
            provide exceptional AI-driven solutions for your unique business
            needs.
          </p>
        </div>
        <div>
          <BentoCards />
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
