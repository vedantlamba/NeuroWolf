"use client";

import React from "react";
import { useTRPC } from "../../../../trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import LoadingState from "@/components/loading-state";
import ErrorState from "@/components/error-state";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

function AgentsView() {
  const { data: session } = authClient.useSession();
  if (!session) {
    redirect("/");
  }

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
  return <div> </div>;
}

export default AgentsView;
