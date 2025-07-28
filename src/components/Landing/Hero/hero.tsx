"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import SenjuButton from "@/components/ui/senju-btn";
import React from "react";

function Hero() {
  return (
    <div className=" flex justify-center items-center md:pt-32 pt-28">
      <div className="flex justify-center items-center flex-col px-4">
        <BlurFade delay={0.25} inView>
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-muted border rounded-full px-4 py-2 text-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-medium">Announcement</span>
              <span className="text-muted-foreground">
                Introducing NeuroWolf AI
              </span>
            </div>
          </div>
        </BlurFade>

        <div className="text-center mb-6">
          <BlurFade delay={0.25 * 2} inView>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight max-w-4xl text-balance">
              Build AI Voice Agents & Book Meetings Instantly
            </h1>
          </BlurFade>
        </div>

        <div className="text-center mb-8 hidden md:block">
          <BlurFade delay={0.25 * 3} inView>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed text-balance">
              Create smart voice agents that handle calls, schedule meetings,
              and engage your customers — all in one platform.
            </p>
          </BlurFade>
        </div>

        <div className="mb-8">
          <BlurFade delay={0.25 * 4} inView>
            <p className="mt-4 text-xs md:text-sm text-center text-primary font-medium bg-primary/10 rounded-lg px-4 py-2 inline-block text-balance ">
              "Neurowolf AI is in development! Follow my progress on Twitter and
              explore this landing page for now."
            </p>
          </BlurFade>
        </div>

        <div className="mb-4">
          <BlurFade delay={0.25 * 6} inView>
            <SenjuButton>Get started for free</SenjuButton>
          </BlurFade>
        </div>

        <div className="text-center">
          <BlurFade delay={0.25 * 7} inView>
            <p className="text-xs md:text-sm text-muted-foreground">
              7 day free trial. No credit card required.
            </p>
          </BlurFade>
        </div>
        <div className="max-w-5xl pt-10">
          <BlurFade delay={0.25 * 8} inView>
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
          </BlurFade>
        </div>
      </div>
    </div>
  );
}

export default Hero;
