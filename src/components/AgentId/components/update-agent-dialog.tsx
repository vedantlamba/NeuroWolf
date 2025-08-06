import React from "react";
import NormalDialog from "@/components/normal-dialog";
import AgentsForm from "@/components/Agents/components/agents-form";
import { AgentGetOne } from "@/components/Agents/types";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: AgentGetOne;
}

export function UpdateAgentDialog({
  open,
  onOpenChange,
  initialValues,
}: Props) {
  return (
    <NormalDialog
      title="Edit Agent"
      description="Update the Agent details"
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentsForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </NormalDialog>
  );
}
