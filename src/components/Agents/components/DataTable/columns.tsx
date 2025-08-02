"use client";

import { ColumnDef } from "@tanstack/react-table";
import { AgentGetOne } from "../../types";
import GeneratedAvatar from "@/components/generated-avatar";
import { CornerDownRightIcon, VideoIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<AgentGetOne>[] = [
  {
    accessorKey: "name",
    header: "Agent Name",
    cell: ({ row }) => (
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-4">
          {row.original?.name && <GeneratedAvatar name={row.original.name} />}
          <span className="capitalize">{row.original?.name}</span>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-1 text-balance  ">
            <CornerDownRightIcon className="size-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {row.original?.instructions}
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "meeetingCount",
    header: "Meetings",
    cell: ({ row }) => (
      <Badge
        variant="outline"
        className="flex items-center gap-x-2 [&>svg]:size-4 rounded-sm"
      >
        <VideoIcon />
        {row.original?.meetingCount}{" "}
        {row.original?.meetingCount === 1 ? "Meeting" : "Meetings"}
      </Badge>
    ),
  },
];
