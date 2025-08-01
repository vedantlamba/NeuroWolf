"use client";

import React from "react";
import { useTRPC } from "../../../../trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import LoadingState from "@/components/loading-state";
import ErrorState from "@/components/error-state";

function AgentsView() {
  const trpc = useTRPC();
  const { data, isLoading, isError } = useSuspenseQuery(
    trpc.agents.getMany.queryOptions()
  );

  if (isLoading) {
    return (
      <div>
        <LoadingState />
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <ErrorState error="Failed to load agents!" />
      </div>
    );
  }
  return <div> {JSON.stringify(data, null, 2)} </div>;
}

export default AgentsView;
