import { db } from "@/lib/db";
import { createTRPCRouter, protectedProcedure } from "../../../../trpc/init";
import * as z from "zod";
import { TRPCError } from "@trpc/server";
import {
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  MAX_PAGE_SIZE,
  MIN_PAGE_SIZE,
} from "../../../../constants";
import { createMeetingSchema } from "../schemas";

export const meetingsRouter = createTRPCRouter({
  update: protectedProcedure
    .input(createMeetingSchema)
    .mutation(async ({ input, ctx }) => {
      const existingMeeting = await db.meetings.findFirst({
        where: {
          id: input.agentId,
          userId: ctx.auth.user.id,
        },
      });

      if (!existingMeeting) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Meeting Not Found!",
        });
      }

      const updatedMeeting = await db.meetings.update({
        where: { id: input.agentId },
        data: {
          ...input,
        },
      });

      return updatedMeeting;
    }),
  create: protectedProcedure
    .input(createMeetingSchema)
    .mutation(async ({ input, ctx }) => {
      const createdMeeting = await db.meetings.create({
        data: {
          ...input,
          userId: ctx.auth.user.id,
        },
      });

      // TODO: Create Stream Calls, Upsert Stream Users

      return createdMeeting;
    }),
  getOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const data = await db.meetings.findFirst({
        where: {
          id: input.id,
          userId: ctx.auth.user.id,
        },
      });

      if (!data)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Meeting Not Found",
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
      const data = await db.meetings.findMany({
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
        include: {
          agents: true,
        },
        skip: (page - 1) * pageNum,
        take: pageNum,
      });

      // With Duration
      const dataWithDuration = data.map((meeting) => ({
        ...meeting,
        duration:
          meeting.endedAt && meeting.startedAt
            ? (new Date(meeting.endedAt).getTime() -
                new Date(meeting.startedAt).getTime()) /
              1000
            : null,
      }));

      const total = await db.meetings.count({
        where: {
          userId: ctx.auth.user.id,
        },
      });

      const totalPages = Math.ceil(total / pageNum);

      return {
        data: dataWithDuration,
        total: total,
        totalPages,
      };

      // return data;
    }),
});
