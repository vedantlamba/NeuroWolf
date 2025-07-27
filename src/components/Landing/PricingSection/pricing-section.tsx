"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "BASIC",
      monthlyPrice: 19,
      yearlyPrice: 190, // ~17/month with discount
      description: "For solo professionals and small projects",
      features: [
        "1 AI Voice Agent",
        "100 Minutes of Calls",
        "Meeting Booking",
        "Basic Support",
        "Access to Standard Voices",
      ],
      popular: false,
      buttonStyle:
        "bg-white border-2 border-violet-500 text-violet-500 hover:bg-violet-50",
    },
    {
      name: "PRO",
      monthlyPrice: 49,
      yearlyPrice: 490, // ~41/month with discount
      description: "Perfect for startups and growing teams",
      features: [
        "5 AI Voice Agents",
        "1,000 Minutes of Calls",
        "Advanced Meeting Scheduling",
        "Priority Support",
        "Customizable Voice Styles",
      ],
      popular: true,
      buttonStyle: "bg-violet-500 text-white hover:bg-violet-600",
    },
    {
      name: "ENTERPRISE",
      monthlyPrice: 99,
      yearlyPrice: 990, // ~83/month with discount
      description: "For agencies and high-volume businesses",
      features: [
        "Unlimited AI Voice Agents",
        "10,000+ Minutes of Calls",
        "Dedicated Account Manager",
        "Custom Integrations",
        "AI Training for Brand Voice",
      ],
      popular: false,
      buttonStyle:
        "bg-white border-2 border-violet-500 text-violet-500 hover:bg-violet-50",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-violet-500 text-sm font-medium tracking-wide uppercase mb-4">
            PRICING
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-balance">
            Choose the plan that's right for you
          </h2>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center space-x-4">
            <span
              className={`text-lg font-medium transition-colors ${
                !isYearly ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-8 w-14  items-center rounded-full transition-colors focus:outline-none cursor-pointer focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 ${
                isYearly ? "bg-violet-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isYearly ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-lg font-medium transition-colors ${
                isYearly ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Yearly
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-sm border-2 transition-all duration-200 hover:shadow-xl ${
                plan.popular
                  ? "border-violet-500 transform scale-105"
                  : "border-gray-200 hover:border-violet-300"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-violet-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <span>⭐</span>
                    <span>Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-500 tracking-wide mb-4">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-gray-900">
                      $
                      {isYearly
                        ? Math.round(plan.yearlyPrice / 12)
                        : plan.monthlyPrice}
                    </span>
                    <span className="text-lg text-gray-500 ml-2">/ month</span>
                  </div>

                  <p className="text-sm text-gray-500">
                    {isYearly ? "billed annually" : "billed monthly"}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-violet-500" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Subscribe Button */}
                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-200 cursor-pointer ${plan.buttonStyle}`}
                >
                  Subscribe
                </button>

                {/* Description */}
                <p className="text-center text-sm text-gray-500 mt-4">
                  {plan.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 px-3">
          <p className="text-gray-600 text-balance">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
            <span className="flex items-center space-x-1">
              <Check className="h-4 w-4 text-violet-500" />
              <span>Cancel anytime</span>
            </span>
            <span className="flex items-center space-x-1">
              <Check className="h-4 w-4 text-violet-500" />
              <span>24/7 support</span>
            </span>
            <span className="flex items-center space-x-1">
              <Check className="h-4 w-4 text-violet-500" />
              <span>Secure payments</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
