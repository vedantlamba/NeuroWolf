import { db } from "@/lib/db";
import { createTRPCRouter, protectedProcedure } from "../../../../trpc/init";
import { agentUpdateSchema, createAgentSchema } from "../schemas";
import * as z from "zod";
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  MAX_PAGE_SIZE,
  MIN_PAGE_SIZE,
} from "../../../../constants";
import { TRPCError } from "@trpc/server";

export const agentsRouter = createTRPCRouter({
  update: protectedProcedure
    .input(agentUpdateSchema)
    .mutation(async ({ input, ctx }) => {
      const existingAgent = await db.agents.findFirst({
        where: {
          id: input.id,
          userId: ctx.auth.user.id,
        },
      });

      if (!existingAgent) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Agent Not Found!" });
      }

      const updatedAgent = await db.agents.update({
        where: { id: input.id },
        data: {
          ...input,
        },
      });

      return updatedAgent;
    }),

  remove: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { id:agentId } = input;
      const removedAgent = await db.agents.delete({
        where: {
          id: agentId,
          userId: ctx.auth.user.id,
        },
      });
      if (!removedAgent)
        throw new TRPCError({ code: "NOT_FOUND", message: "Agent Not Found!" });
      return removedAgent;
    }),
  getOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const data = await db.agents.findFirst({
        where: {
          id: input.id,
          userId: ctx.auth.user.id,
        },
      });

      if (!data)
        throw new TRPCError({ code: "NOT_FOUND", message: "Agent Not Found" });

      return data;
    }),

  getMany: protectedProcedure
    .input(
      z.object({
        page: z.number().default(DEFAULT_PAGE),
        pageNum: z
          .number()
          .min(MIN_PAGE_SIZE)
          .max(MAX_PAGE_SIZE)
          .default(DEFAULT_PAGE_SIZE),
        search: z.string().nullish(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { page, pageNum, search } = input;
      const data = await db.agents.findMany({
        orderBy: {
          createdAt: "desc",
        },
        where: {
          userId: ctx.auth.user.id,

          ...(search && {
            name: {
              contains: search,
              mode: "insensitive",
            },
          }),
        },
        skip: (page - 1) * pageNum,
        take: pageNum,
      });

      const total = await db.agents.count({
        where: {
          userId: ctx.auth.user.id,
        },
      });

      const totalPages = Math.ceil(total / pageNum);

      return {
        data,
        total: total,
        totalPages,
      };

      // return data;
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
