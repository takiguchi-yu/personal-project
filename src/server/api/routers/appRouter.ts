import {
  createProjectController,
  findAllProjectsController,
} from "~/server/api/controller/projectController";
import {
  createProjectSchema,
  filterQuery,
} from "~/server/api/schema/projectShema";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
  // データ挿入
  createProject: publicProcedure
    .input(createProjectSchema)
    .mutation(({ input }) => createProjectController({ input })),
  // データ参照
  getProjects: publicProcedure
    .input(filterQuery)
    .query(({ input }) => findAllProjectsController({ input })),
});
