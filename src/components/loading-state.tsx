import React from "react";
import { Cat } from "react-kawaii";

function LoadingState() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center pt-24 md:pt-56">
      <div>
        <Cat size={240} mood="blissful" color="#d7baff" />
      </div>
      <div>
        <p className="font-mono tracking-wide">Loading...</p>
      </div>
    </div>
  );
}

export default LoadingState;
