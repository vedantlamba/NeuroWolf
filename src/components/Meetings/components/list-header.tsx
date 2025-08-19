"use client";

import React, { useState } from "react";
import { RainbowButton } from "../../ui/rainbow-button";
import { PlusIcon, X } from "lucide-react";
// import { useAgentFilters } from "../hooks/use-agents-filter";
// import { SearchFilter } from "./agent-search-filter";
import { DEFAULT_PAGE } from "../../../../constants";
import { Button } from "@/components/ui/button";
import { MeetingDialog } from "./meeting-dialog";

interface Props {
  heading: string;
  buttonText: string;
}

function ListHeader({ heading, buttonText }: Props) {
  // const [filters, setFilters] = useAgentFilters();
  const [open, setOpen] = useState(false);

  // const isAnyFilterModified = !!filters.search;

  // const onClearFilters = () => {
  //   setFilters({
  //     search: "",
  //     page: DEFAULT_PAGE,
  //   });
  // };

  return (
    <>
      <MeetingDialog open={open} onOpenChange={setOpen} />
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
        TODO: FILTERS
        {/* <div className="flex items-center gap-x-2 p-1">
          <div className="flex gap-x-3 justify-between w-full md:justify-start">
            <SearchFilter />
            {isAnyFilterModified && (
              <Button onClick={onClearFilters} className="cursor-pointer">
                <X />
                Clear
              </Button>
            )}
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ListHeader;
