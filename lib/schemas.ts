import { z } from "zod";

export function createEmailSchema(messages: { required: string; invalid: string }) {
  return z.object({
    email: z
      .string({ required_error: messages.required })
      .min(1, messages.required)
      .email(messages.invalid),
  });
}

export type EmailFormValues = { email: string };
