import AgentsView from "@/components/Agents/components/agents-view";
import type { SearchParams } from "nuqs";
import React, { Suspense } from "react";
import { getQueryClient, trpc } from "../../../../trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import LoadingState from "@/components/loading-state";
import ErrorState from "@/components/error-state";
import ListHeader from "@/components/Agents/components/list-header";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { loadSearchParams } from "@/components/Agents/params";

interface Props {
  searchParams: Promise<SearchParams>;
}

async function AgentsPage({ searchParams }: Props) {
  const filters = await loadSearchParams(searchParams);
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/");
  }
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.agents.getMany.queryOptions({ ...filters })
  );
  return (
    <>
      <ListHeader heading="Agents" buttonText="New Agent" />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<LoadingState />}>
          <ErrorBoundary fallback={<ErrorState />}>
            <div>
              <AgentsView />
            </div>
          </ErrorBoundary>
        </Suspense>
      </HydrationBoundary>
    </>
  );
}

export default AgentsPage;
