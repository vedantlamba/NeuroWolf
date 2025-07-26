import { StickyBanner } from "@/components/ui/sticky-banner";
import React from "react";

function Banner() {
  return (
    <div className=" flex  w-full flex-col overflow-y-auto">
      <StickyBanner className="bg-gradient-to-b from-violet-500 to-violet-600">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Neurowolf AI is in development! Follow my progress on{" "}
          <span>
            <a href="#" className="transition duration-200 hover:underline">
              Twitter
            </a>
          </span>{" "}
          and explore this landing page in the meantime.
        </p>
      </StickyBanner>
    </div>
  );
}

export default Banner;
