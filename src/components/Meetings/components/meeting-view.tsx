"use client";
import React from "react";
import { useTRPC } from "../../../../trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { DataTable } from "./DataTable/data-table";
import { columns } from "./DataTable/columns";

function MeetingView() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));
  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable data={data.data} columns={columns} />
    </div>
  );
}

export default MeetingView;
