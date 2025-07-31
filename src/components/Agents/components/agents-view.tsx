"use client";

import React from "react";
import { useTRPC } from "../../../../trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

function AgentsView() {
  const trpc = useTRPC();
  const { data, isLoading, isError } = useSuspenseQuery(
    trpc.agents.getMany.queryOptions()
  );
  if (isLoading) {
    return <div>Agent Loading...</div>;
  }
  if (isError) {
    return <div>Agent Error...</div>;
  }
  return <div>Agents View - {JSON.stringify(data, null, 2)} </div>;
}

export default AgentsView;
