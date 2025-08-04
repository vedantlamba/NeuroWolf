"use client";

import React, { useState } from "react";
import { useTRPC } from "../../../../trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import LoadingState from "@/components/loading-state";
import ErrorState from "@/components/error-state";
import { DataTable } from "./DataTable/data-table";
import { columns } from "./DataTable/columns";
import EmptyState from "./DataTable/empty-state";
import { useAgentFilters } from "../hooks/use-agents-filter";

function AgentsView() {
  const [filters, SetFilters] = useAgentFilters();
  const trpc = useTRPC();
  const { data, isLoading, isError } = useSuspenseQuery(
    trpc.agents.getMany.queryOptions({ ...filters })
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
  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable data={data.data} columns={columns} />{" "}
      {data.data.length === 0 && <EmptyState error="Create Your First Agent" />}
    </div>
  );
}

export default AgentsView;
