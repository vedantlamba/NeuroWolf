import * as z from "zod";

export const createAgentSchema = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
  instructions: z.string().min(5, { message: "Instructions are required" }),
});

export const agentUpdateSchema = createAgentSchema.extend({
  id: z.string().min(1, { message: "Id is required" }),
});
