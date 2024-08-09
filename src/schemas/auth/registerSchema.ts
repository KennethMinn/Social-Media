import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Passwords must be at least 6 characters"),
});

export type TRegisterSchema = z.infer<typeof registerSchema>;
