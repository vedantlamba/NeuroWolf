import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { getQueryClient, trpc } from "../../../../trpc/server";
import MeetingView from "@/components/Meetings/components/meeting-view";
import LoadingState from "@/components/loading-state";
import { ErrorBoundary } from "react-error-boundary";
import ErrorState from "@/components/error-state";
import ListHeader from "@/components/Meetings/components/list-header";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function MeetingPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/");
  }
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.meetings.getMany.queryOptions({}));

  return (
    <>
      <ListHeader heading="My Meetings" buttonText="New Meeting" />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<LoadingState />}>
          <ErrorBoundary fallback={<ErrorState error="No meetings found!" />}>
            <div>
              <MeetingView />
            </div>
          </ErrorBoundary>
        </Suspense>
      </HydrationBoundary>
    </>
  );
}

export default MeetingPage;
