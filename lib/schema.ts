import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(10, "To short must be longer than 10 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
