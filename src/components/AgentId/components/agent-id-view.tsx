"use client";
import React, { useState } from "react";
import { useTRPC } from "../../../../trpc/client";
import { useRouter } from "next/navigation";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import AgentIdViewHeader from "./agent-id-view-header";
import GeneratedAvatar from "@/components/generated-avatar";
import { useQueryClient } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { VideoIcon } from "lucide-react";
import toast from "react-hot-toast";
import { UpdateAgentDialog } from "./update-agent-dialog";

interface Props {
  agentId: string;
}

function AgentIdView({ agentId }: Props) {
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const trpc = useTRPC();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data } = useSuspenseQuery(
    trpc.agents.getOne.queryOptions({ id: agentId })
  );

  const removedAgent = useMutation(
    trpc.agents.remove.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries(
          trpc.agents.getMany.queryOptions({})
          // TODO: Invalidate Free Tier Usage
        );
        router.push("/agents");
        toast.success("Agent deleted successfully!");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    })
  );

  return (
    <>
      <UpdateAgentDialog
        open={updateDialogOpen}
        onOpenChange={setUpdateDialogOpen}
        initialValues={data}
      />
      <div className="flex-1 py-4 px-4 md:px-8 flex flex-col gap-y-4">
        <AgentIdViewHeader
          agentId={agentId}
          agentName={data.name}
          onEdit={() => setUpdateDialogOpen(true)}
          onRemove={() => removedAgent.mutate({ id: agentId })}
        />
        <div className="bg-white rounded-lg border">
          <div className="px-4 py-5 gap-y-5 flex flex-col col-span-5">
            <div className="flex items-center gap-x-3">
              <GeneratedAvatar name={data.name} />
              <h2 className="font-medium">{data.name}</h2>
            </div>
            <Badge className="flex items-center gap-x-2 [&>svg]:size-4">
              <VideoIcon />
              {data.meetingCount}{" "}
              {data.meetingCount === 1 ? "Meeting" : "Meetings"}
            </Badge>
            <div className="flex flex-col gap-y-2 pt-4 w-full">
              <p className="text-lg font-medium">Instructions</p>
              <p className="text-sm text-muted-foreground text-balance">
                {data.instructions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgentIdView;
