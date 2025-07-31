import { db } from "@/lib/db";
import { createTRPCRouter, baseProcedure } from "../../../../trpc/init";

export const agentsRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
    const data = await db.agents.findMany();
    return data;
  }),
});
