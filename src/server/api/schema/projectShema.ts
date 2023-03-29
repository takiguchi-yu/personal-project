import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  published: z.boolean().optional(),
  thumbnail: z.string({
    required_error: "Thumbnail is required",
  }),
  url: z.string({
    required_error: "URL is required",
  }),
});

export type CreateProjectSchema = z.TypeOf<typeof createProjectSchema>;
