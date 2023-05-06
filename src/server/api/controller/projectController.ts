import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";

import {
  type CreateProjectInput,
  type FilterQueryInput,
} from "~/server/api/schema/projectShema";
import { prisma } from "~/server/db";

export const createProjectController = async ({
  input,
}: {
  input: CreateProjectInput;
}) => {
  try {
    const project = await prisma.project.create({
      data: {
        name: input.name,
        published: input.published,
        qiita: input.qiita,
        thumbnail: input.thumbnail,
        url: input.url,
        zenn: input.zenn,
      },
    });

    return {
      data: {
        project,
      },
      status: "success",
    };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Project with that title already exists",
        });
      }
    }
    throw error;
  }
};

const delay = (ms: number | undefined) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const findAllProjectsController = async ({
  input,
}: {
  input: FilterQueryInput;
}) => {
  try {
    // await delay(500);
    const page = input.page || 1;
    const limit = input.limit || 10;
    const skip = (page - 1) * limit;

    const projects = await prisma.project.findMany({
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
};
