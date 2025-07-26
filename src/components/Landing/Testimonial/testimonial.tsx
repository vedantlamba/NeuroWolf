"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import React, { useEffect, useState } from "react";

const demoTestimonials = [
  {
    quote:
      "Neurowolf feels like having my own AI assistant. I can create agents, schedule meetings, and chat with them whenever I need.",
    name: "Thomas Shelby",
    designation: "Founder at Shelby Enterprises",
    src: "https://c.files.bbci.co.uk/5899/live/b341ab20-2317-11ef-96c3-99f9322e70a9.jpg",
  },
  {
    quote:
      "Everything is under my control. I talk to my AI agents, set up meetings, and get things done—without relying on anyone else.",
    name: "Arthur Shelby",
    designation: "Independent Consultant",
    src: "https://thechap.co.uk/wp-content/uploads/2023/09/paul-anderson-920x1024.jpg",
  },
  {
    quote:
      "Instead of juggling tools, I just log into Neurowolf and manage everything from one place. It’s my personal AI workspace.",
    name: "Polly Gray",
    designation: "Operations Director at Gray Solutions",
    src: "https://ichef.bbci.co.uk/images/ic/480xn/p07l6cgl.jpg",
  },
  {
    quote:
      "I can chat with my AI agents any time and use them to plan and run meetings. It’s like having a 24/7 assistant just for me.",
    name: "John Shelby",
    designation: "Freelancer & Business Coach",
    src: "https://i.pinimg.com/564x/3b/f9/52/3bf95269083f26ddce72b275dc27f3f5.jpg",
  },
];

function Testimonial() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return false;

  return (
    <section className="py-16  bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-500 text-sm font-medium tracking-wide uppercase mb-4">
            Testimonial Highlight
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What our customers are saying
          </h2>
        </div>
      </div>
      <div>
        <AnimatedTestimonials testimonials={demoTestimonials} />
      </div>
    </section>
  );
}

export default Testimonial;
