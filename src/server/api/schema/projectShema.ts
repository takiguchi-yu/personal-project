import { z } from "zod";

export const createProjectSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  published: z.boolean().optional(),
  qiita: z.string().optional(),
  thumbnail: z.string({
    required_error: "Thumbnail is required",
  }),
  url: z.string({
    required_error: "URL is required",
  }),
  zenn: z.string().optional(),
});

export const filterQuery = z.object({
  limit: z.number().default(1),
  page: z.number().default(10),
});

export type CreateProjectInput = z.TypeOf<typeof createProjectSchema>;
export type FilterQueryInput = z.TypeOf<typeof filterQuery>;
