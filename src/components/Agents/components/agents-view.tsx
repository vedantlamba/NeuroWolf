"use client";

import React from "react";
import { useTRPC } from "../../../../trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import LoadingState from "@/components/loading-state";
import ErrorState from "@/components/error-state";
import { DataTable } from "./DataTable/data-table";
import { columns } from "./DataTable/columns";
import EmptyState from "./DataTable/empty-state";

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
  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable data={data} columns={columns} />{" "}
      {data.length === 0 && <EmptyState error="Create Your First Agent" />}
    </div>
  );
}

export default AgentsView;
