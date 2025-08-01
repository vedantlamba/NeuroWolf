import { db } from "@/lib/db";
import {
  createTRPCRouter,
  baseProcedure,
  protectedProcedure,
} from "../../../../trpc/init";
import { createAgentSchema } from "../schemas";

export const agentsRouter = createTRPCRouter({
  //TODO: Change `getMany` to use protectedProcedure
  getMany: baseProcedure.query(async () => {
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
