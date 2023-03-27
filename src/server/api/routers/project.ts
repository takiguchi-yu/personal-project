import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
  getProjects: publicProcedure
    .input(
      z.object({
        page: z.number().default(10),
        limit: z.number().default(1),
      })
    )
    .query(async ({ ctx, input }) => {
      try {
        const page = input.page || 1;
        const limit = input.limit || 10;
        const skip = (page - 1) * limit;

        const projects = await ctx.prisma.project.findMany({
          skip,
          take: limit,
          where: {
            published: true,
          },
          orderBy: {
            updatedAt: "desc",
          },
        });

        return {
          status: "success",
          results: projects.length,
          projects,
        };
      } catch (error) {
        throw error;
      }
    }),
});
