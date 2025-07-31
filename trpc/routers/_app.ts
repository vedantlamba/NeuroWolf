import { createTRPCRouter } from "../init";
import { agentsRouter } from "@/components/Agents/server/procedures";
export const appRouter = createTRPCRouter({
  agents: agentsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
