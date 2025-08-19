import React from "react";
import NormalDialog from "@/components/normal-dialog";
import MeetingForm from "./meetings-form";
import { useRouter } from "next/navigation";
// import AgentsForm from "./agents-form";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MeetingDialog({ open, onOpenChange }: Props) {
  const router = useRouter();
  return (
    <NormalDialog
      title="New Meeting"
      description="Create A New Meeting"
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingForm
        onSuccess={(id) => {
          onOpenChange(false);
          router.push(`/meetings/${id}`);
        }}
        onCancel={() => onOpenChange(false)}
      />
    </NormalDialog>
  );
}
