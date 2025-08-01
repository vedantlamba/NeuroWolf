import { db } from "@/lib/db";
import { createTRPCRouter, protectedProcedure } from "../../../../trpc/init";
import { createAgentSchema } from "../schemas";
import * as z from "zod";

export const agentsRouter = createTRPCRouter({
  getOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const data = await db.agents.findFirst({
        where: {
          id: input.id,
        },
      });

      return data;
    }),

  getMany: protectedProcedure.query(async () => {
    const data = await db.agents.findMany();
    return data;
  }),
  create: protectedProcedure
    .input(createAgentSchema)
    .mutation(async ({ input, ctx }) => {
      const createdAgent = await db.agents.create({
        data: {
          ...input,
          userId: ctx.auth.user.id,
        },
      });

      return createdAgent;
    }),
});
