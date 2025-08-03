import { db } from "@/lib/db";
import { createTRPCRouter, protectedProcedure } from "../../../../trpc/init";
import { createAgentSchema } from "../schemas";
import * as z from "zod";
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  MAX_PAGE_SIZE,
  MIN_PAGE_SIZE,
} from "../../../../constants";

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
