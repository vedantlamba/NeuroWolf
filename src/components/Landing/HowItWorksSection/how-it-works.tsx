"use client";

import React from "react";
import { Upload, Zap, Target } from "lucide-react";
import SenjuButton from "@/components/ui/senju-btn";
import { RainbowButton } from "@/components/ui/rainbow-button";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1.",
      title: "Upload Your Data",
      description:
        "Simply upload your data to our secure platform. We support various file formats and data types to ensure a seamless integration with your existing systems.",
      icon: Upload,
      iconBg: "bg-red-50",
      iconColor: "text-violet-500",
      borderColor: "border-violet-500",
    },
    {
      number: "2.",
      title: "Click Start",
      description:
        "Our advanced AI algorithms automatically process and analyze your data, extracting valuable insights and patterns that would be difficult to identify manually.",
      icon: Zap,
      iconBg: "bg-red-50",
      iconColor: "text-violet-500",
      borderColor: "border-violet-500",
    },
    {
      number: "3.",
      title: "Get Actionable Insights",
      description:
        "Receive clear, actionable insights and recommendations based on the AI analysis. Use these insights to make data-driven decisions and improve your business strategies.",
      icon: Target,
      iconBg: "bg-red-50",
      iconColor: "text-violet-500",
      borderColor: "border-violet-500",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-500 text-sm font-medium tracking-wide uppercase mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Just 3 steps to get started
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 ${step.iconBg} rounded-lg flex items-center justify-center`}
                  >
                    <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                  </div>
                </div>

                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.number} {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:pl-8 hidden md:block">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 bg-white rounded px-3 py-1 text-xs text-gray-500 flex-1">
                    dashboard.ai-platform.com
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Inbox
                    </h3>
                    <p className="text-sm text-gray-500">
                      AI Insights - Discover
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                  </div>
                </div>

                <div className="flex items-center space-x-6 mb-6 text-sm">
                  <span className="text-gray-900 font-medium border-b-2 border-blue-500 pb-1">
                    Data
                  </span>
                  <span className="text-gray-500">Insights</span>
                  <span className="text-gray-500">Reports</span>
                  <span className="text-gray-500">Settings</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-900">
                          Data Sources
                        </div>
                        <div className="text-xs text-gray-500">23</div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-blue-200 rounded w-3/4"></div>
                        <div className="h-2 bg-green-200 rounded w-1/2"></div>
                        <div className="h-2 bg-purple-200 rounded w-5/6"></div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-900 mb-2">
                        Processing Status
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Analytics</span>
                          <span className="text-green-600">Complete</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">ML Training</span>
                          <span className="text-yellow-600">In Progress</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Reports</span>
                          <span className="text-gray-400">Pending</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-900 mb-2">
                        Recent Insights
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded p-3 shadow-sm">
                          <div className="text-xs font-medium text-gray-900 mb-1">
                            Customer Behavior
                          </div>
                          <div className="text-xs text-gray-600">
                            Increase in mobile usage detected
                          </div>
                          <div className="mt-2 flex items-center space-x-2">
                            <div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                              High Impact
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded p-3 shadow-sm">
                          <div className="text-xs font-medium text-gray-900 mb-1">
                            Sales Trend
                          </div>
                          <div className="text-xs text-gray-600">
                            Q4 performance exceeding targets
                          </div>
                          <div className="mt-2 flex items-center space-x-2">
                            <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                              Medium Impact
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <div className="text-xs text-gray-500">
                    Last updated 2 minutes ago
                  </div>
                  {/* <button className="px-4 py-2 bg-blue-500 text-white text-xs rounded-lg hover:bg-blue-600 transition-colors">
                    Generate Report
                  </button> */}
                  {/* <SenjuButton>Generate Report</SenjuButton> */}
                  {/* <RainbowButton variant="outline">Generate Report</RainbowButton> */}
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <RainbowButton variant="outline">
                      Generate Report
                    </RainbowButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
