import AgentsView from "@/components/Agents/components/agents-view";
import React, { Suspense } from "react";
import { getQueryClient, trpc } from "../../../../trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

function AgentsPage() {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback="Loading...">
        <ErrorBoundary fallback="Error...">
          <div>
            <AgentsView />
          </div>
        </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
  );
}

export default AgentsPage;
