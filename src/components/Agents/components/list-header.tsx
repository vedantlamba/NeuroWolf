"use client";

import React, { useState } from "react";
import { RainbowButton } from "../../ui/rainbow-button";
import { PlusIcon } from "lucide-react";
import { AgentDialog } from "./agent-dialog";

interface Props {
  heading: string;
  buttonText: string;
}

function ListHeader({ heading, buttonText }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AgentDialog open={open} onOpenChange={setOpen} />
      <div className="py-4 px-4 md:px-8 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-light">{heading}</h2>
          </div>
          <div>
            <RainbowButton onClick={() => setOpen(true)}>
              <PlusIcon />
              {buttonText}
            </RainbowButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListHeader;
