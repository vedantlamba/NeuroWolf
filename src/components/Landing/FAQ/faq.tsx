import React from "react";
import { FaqAccordian } from "./accordian";

function Faqs() {
  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-500 text-sm font-medium tracking-wide uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Frequently asked questions
          </h2>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4">
        <FaqAccordian />
      </div>
      <div>
        <h3 className="text-xs md:text-sm text-center py-6 text-neutral-500">Still have questions? Email us at support@neurowolf.ai</h3>
      </div>
    </section>
  );
}

export default Faqs;
