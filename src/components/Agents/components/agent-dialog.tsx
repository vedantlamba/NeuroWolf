import React from "react";
import NormalDialog from "@/components/normal-dialog";

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
      New Agent Form
    </NormalDialog>
  );
}
