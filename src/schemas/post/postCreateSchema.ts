import { z } from "zod";

export const postCreateSchema = z.object({
  title: z.string().min(1, "title is required"),
  authorId: z.number().min(1, "authorId is required"), // Must be an integer
});

export type TPostCreateSchema = z.infer<typeof postCreateSchema>;
