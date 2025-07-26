"use client";

import { Button } from "@/components/ui/button";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import SenjuButton from "@/components/ui/senju-btn";
import React from "react";

function Hero() {
  return (
    <div className=" flex justify-center items-center md:pt-32 pt-28">
      <div className="flex justify-center items-center flex-col px-4">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-muted border rounded-full px-4 py-2 text-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-medium">Announcement</span>
            <span className="text-muted-foreground">
              Introducing NeuroWolf AI
            </span>
          </div>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight max-w-4xl">
            Automate your workflow with AI
          </h1>
        </div>

        <div className="text-center mb-8">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            No matter what problem you have, our AI can help you solve it.
          </p>
        </div>
        <div className="mb-8">
          <p className="mt-4 text-xs md:text-sm text-center text-primary font-medium bg-primary/10 rounded-lg px-4 py-2 inline-block text-balance ">
             "Neurowolf AI is in development! Follow my progress on Twitter and
            explore this landing page for now."
          </p>
        </div>

        <div className="mb-4">
          {/* <Button className="inline-flex items-center gap-2 px-8 py-4 text-base transition-all duration-200 cursor-pointer">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Get started for free
          </Button> */}
          <SenjuButton>Get started for free</SenjuButton>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            7 day free trial. No credit card required.
          </p>
        </div>
        <div className="max-w-5xl pt-10">
          <div className="relative">
            <HeroVideoDialog
              className="block dark:hidden"
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
              thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
              thumbnailAlt="Hero Video"
            />

            {/* White gradient overlay from bottom to top */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
