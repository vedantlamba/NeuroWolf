"use client";
import React from "react";
import { useTRPC } from "../../../../trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

function MeetingView() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));
  return <div>
    TODO: Data Table
  </div>;
}

export default MeetingView;

// cmdu285tk0001tem8mfc41l18
// jgCH2y121OyHNbPz5sgchjfGxm1oAaU6