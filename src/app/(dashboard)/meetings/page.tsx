import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { trpc } from "../../../../trpc/server";
import MeetingView from "@/components/Meetings/components/meeting-view";

async function MeetingPage() {
//   const queryClient = useQueryClient();

  return (
    <div>
      <MeetingView />
    </div>
  );
}

export default MeetingPage;
