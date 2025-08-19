"use client";

import React, { useState } from "react";
import { MeetingGetOne } from "../types";
import { useTRPC } from "../../../../trpc/client";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "react-hot-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createMeetingSchema } from "../schemas";
import { CommandSelect } from "./command-select";
import GeneratedAvatar from "@/components/generated-avatar";
import { AgentDialog } from "@/components/Agents/components/agent-dialog";

interface Props {
  onSuccess?: (id?: string) => void;
  onCancel?: () => void;
  initialValues?: MeetingGetOne;
}

function MeetingForm({ onSuccess, onCancel, initialValues }: Props) {
  const trpc = useTRPC();

  const queryClient = useQueryClient();

  const [openNewAgentDialog, setNewOpenAgentDialog] = useState(false);
  const [agentSearch, setAgentSearch] = useState("");

  const agents = useQuery(
    trpc.agents.getMany.queryOptions({
      search: agentSearch,
      page: 1,
      pageNum: 100,
    })
  );

  const createMeeting = useMutation(
    trpc.meetings.create.mutationOptions({
      onSuccess: async (data) => {
        toast.success("Meeting Created Successfully");
        await queryClient.invalidateQueries(
          trpc.agents.getMany.queryOptions({})
        );
        //TODO: Invalidate Free Tier Usage
        onSuccess?.(data.id);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    })
  );

  const updateMeeting = useMutation(
    trpc.meetings.update.mutationOptions({
      onSuccess: async () => {
        toast.success("Meeting Update Successfully");
        await queryClient.invalidateQueries(
          trpc.meetings.getMany.queryOptions({})
        );
        if (initialValues?.id) {
          await queryClient.invalidateQueries(
            trpc.meetings.getOne.queryOptions({ id: initialValues.id })
          );
        }
        onSuccess?.();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    })
  );

  const form = useForm<z.infer<typeof createMeetingSchema>>({
    resolver: zodResolver(createMeetingSchema),
    defaultValues: {
      name: initialValues?.name ?? "",
      agentId: initialValues?.agentId ?? "",
      // instructions: initialValues?.instructions ?? "",
    },
  });

  const isEdit = !!initialValues?.id;
  const isPending = createMeeting.isPending || updateMeeting.isPending;

  const onSubmit = (values: z.infer<typeof createMeetingSchema>) => {
    if (isEdit) {
      updateMeeting.mutate({ ...values, agentId: initialValues.id });
    } else {
      createMeeting.mutate(values);
    }
  };

  return (
    <>
      <AgentDialog
        open={openNewAgentDialog}
        onOpenChange={setNewOpenAgentDialog}
      />
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="e.g. Medication Consultations"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="agentId"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Agent</FormLabel>
                <FormControl>
                  <CommandSelect
                    options={(agents?.data?.data ?? []).map((agent) => ({
                      id: agent.id,
                      value: agent.id,
                      children: (
                        <div className="flex items-center gap-x-2">
                          <GeneratedAvatar
                            name={agent.name}
                            classname="size-5"
                          />
                          <span>{agent.name}</span>
                        </div>
                      ),
                    }))}
                    onSelect={field.onChange}
                    onSearch={setAgentSearch}
                    value={field.value}
                    placeholder="Select an agent!"
                  />
                </FormControl>
                <FormDescription className="text-xs pt-3 text-balance">
                  Not found what you&apos;re looking for?{" "}
                  <button
                    type="button"
                    className="text-primary hover:underline cursor-pointer"
                    onClick={() => setNewOpenAgentDialog(true)}
                  >
                    Create New Agent
                  </button>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between items-center">
            {onCancel && (
              <Button
                variant="outline"
                disabled={isPending}
                onClick={() => onCancel()}
                className="cursor-pointer"
              >
                Cancel
              </Button>
            )}
            <Button
              disabled={isPending}
              type="submit"
              className="cursor-pointer"
            >
              {isEdit ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}

export default MeetingForm;
