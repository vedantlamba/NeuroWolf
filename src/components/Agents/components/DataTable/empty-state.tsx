import React from "react";
import { Cat } from "react-kawaii";

interface Props {
  error?: string;
}

function EmptyState({ error = "You got an Error!" }: Props) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center text-center">
      <div>
        <Cat size={240} mood="excited" color="#d7baff" />
      </div>
      <div>
        <p className="font-mono tracking-wide text-xl text-balance">{error}</p>
      </div>
    </div>
  );
}

export default EmptyState;
