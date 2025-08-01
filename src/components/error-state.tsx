import React from "react";
import { Cat } from "react-kawaii";

interface Props {
  error?: string;
}

function ErrorState({ error = "You got an Error!" }: Props) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center pt-24 md:pt-56 text-center">
      <div>
        <Cat size={240} mood="ko" color="#d7baff" />
      </div>
      <div>
        <p className="font-mono tracking-wide text-xl text-balance">{error}</p>
      </div>
    </div>
  );
}

export default ErrorState;
