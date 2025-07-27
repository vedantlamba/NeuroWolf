"use client";

import React from "react";
// import { Upload, Zap, Target } from "lucide-react";
import SenjuButton from "@/components/ui/senju-btn";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { PhoneCall, Zap, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1.",
      title: "Create Your Agent",
      description:
        "Log in and build your personal AI agent in minutes. Customize voice, tone, and behavior the way you like.",
      icon: PhoneCall,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-500",
      borderColor: "border-violet-500",
    },
    {
      number: "2.",
      title: "Chat & Schedule",
      description:
        "Start real-time conversations with your AI or let it organize meetings for you, all from your dashboard.",
      icon: Zap,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-500",
      borderColor: "border-violet-500",
    },
    {
      number: "3.",
      title: "Stay in Control",
      description:
        "Only you can manage agents and meetings. Adjust settings anytime and keep your AI working exactly as you want.",
      icon: CheckCircle,
      iconBg: "bg-violet-50",
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-balance">
            Just 3 steps to get started
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
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
              {/* Browser Header */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 bg-white rounded px-3 py-1 text-xs text-gray-500 flex-1">
                    dashboard.neurowolf.ai
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Call Center
                    </h3>
                    <p className="text-sm text-gray-500">
                      AI Voice Agents Overview
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center space-x-6 mb-6 text-sm">
                  <span className="text-gray-900 font-medium border-b-2 border-violet-500 pb-1">
                    Agents
                  </span>
                  <span className="text-gray-500">Calls</span>
                  <span className="text-gray-500">Analytics</span>
                  <span className="text-gray-500">Settings</span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {/* Agents Status */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-900">
                          Active Agents
                        </div>
                        <div className="text-xs text-gray-500">8</div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-violet-200 rounded w-3/4"></div>
                        <div className="h-2 bg-green-200 rounded w-1/2"></div>
                        <div className="h-2 bg-blue-200 rounded w-5/6"></div>
                      </div>
                    </div>

                    {/* Call Status */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-900 mb-2">
                        Call Status
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Ongoing Calls</span>
                          <span className="text-green-600">12</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Queued Calls</span>
                          <span className="text-yellow-600">4</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Missed Calls</span>
                          <span className="text-red-600">1</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Conversations */}
                  <div className="space-y-4">
                    <div className="bg-violet-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-gray-900 mb-2">
                        Recent Conversations
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded p-3 shadow-sm">
                          <div className="text-xs font-medium text-gray-900 mb-1">
                            Booking Assistant
                          </div>
                          <div className="text-xs text-gray-600">
                            Booked 2 appointments successfully
                          </div>
                          <div className="mt-2 flex items-center space-x-2">
                            <div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                              Completed
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded p-3 shadow-sm">
                          <div className="text-xs font-medium text-gray-900 mb-1">
                            Sales Agent
                          </div>
                          <div className="text-xs text-gray-600">
                            Follow-up call scheduled with lead
                          </div>
                          <div className="mt-2 flex items-center space-x-2">
                            <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                              In Progress
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 flex justify-between items-center">
                  <div className="text-xs text-gray-500">
                    Last updated 2 minutes ago
                  </div>

                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <RainbowButton variant="outline">
                      Add New Agent
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
