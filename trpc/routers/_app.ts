import { meetingsRouter } from "@/components/Meetings/server/procedures";
import { createTRPCRouter } from "../init";
import { agentsRouter } from "@/components/Agents/server/procedures";
export const appRouter = createTRPCRouter({
  agents: agentsRouter,
  meetings: meetingsRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;
