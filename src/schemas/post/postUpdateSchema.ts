import { z } from "zod";

export const postUpdateSchema = z.object({
  title: z.string().optional(),
});

export type TPostUpdateSchema = z.infer<typeof postUpdateSchema>;
