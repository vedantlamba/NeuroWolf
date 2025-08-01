import React from "react";
import NormalDialog from "@/components/normal-dialog";
import AgentsForm from "./agents-form";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AgentDialog({ open, onOpenChange }: Props) {
  return (
    <NormalDialog
      title="New Agent"
      description="Create A New Agent"
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentsForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
      />
    </NormalDialog>
  );
}
