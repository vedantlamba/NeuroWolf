import React, { Suspense } from "react";
import { getQueryClient, trpc } from "../../../../../trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorState from "@/components/error-state";
import LoadingState from "@/components/loading-state";
import AgentIdView from "@/components/AgentId/components/agent-id-view";

interface Props {
  params: Promise<{ agentId: string }>;
}

async function AgentPage({ params }: Props) {
  const agentId = (await params).agentId;
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.agents.getOne.queryOptions({ id: agentId })
  );
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<LoadingState />}>
          <ErrorBoundary fallback={<ErrorState />}>
            <AgentIdView agentId={agentId} />
          </ErrorBoundary>
        </Suspense>
      </HydrationBoundary>
    </div>
  );
}

export default AgentPage;
