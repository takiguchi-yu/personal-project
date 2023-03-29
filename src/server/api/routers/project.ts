import { z } from "zod";

import { createProjectController } from "~/server/api/controller/projectController";
import { createProjectSchema } from "~/server/api/schema/projectShema";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
  // データ挿入
  createProject: publicProcedure
    .input(createProjectSchema)
    .mutation(({ input }) => createProjectController({ input })),
  getProjects: publicProcedure
    .input(
      z.object({
        limit: z.number().default(1),
        page: z.number().default(10),
      })
    )
    .query(async ({ ctx, input }) => {
      try {
        const page = input.page || 1;
        const limit = input.limit || 10;
        const skip = (page - 1) * limit;

        const projects = await ctx.prisma.project.findMany({
          orderBy: {
            updatedAt: "desc",
          },
          skip,
          take: limit,
          where: {
            published: true,
          },
        });

        return {
          projects,
          results: projects.length,
          status: "success",
        };
      } catch (error) {
        throw error;
      }
    }),
});
