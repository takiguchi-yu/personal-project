import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";

import { type CreateProjectSchema } from "~/server/api/schema/projectShema";
import { prisma } from "~/server/db";

export const createProjectController = async ({
  input,
}: {
  input: CreateProjectSchema;
}) => {
  try {
    const project = await prisma.project.create({
      data: {
        name: input.name,
        published: input.published,
        thumbnail: input.thumbnail,
        url: input.url,
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
