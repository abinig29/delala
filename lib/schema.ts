import { z } from "zod";
import { DATE_OPTIONS } from "./constant";

export const fieldValidators = {
  emailOptional: z
    .string()
    .email({ message: "This filed should be have email format" })
    .optional(),
  email: z
    .string()
    .email({ message: "This filed should be have email format" })
    .min(1, { message: "Email filed is required" }),
  phoneNumber: z
    .string()
    .regex(/^\+?[0-9]\d{0,14}$/)
    .min(1, { message: "Phone number should have value" }),
  any: z.any(),
  date: z
    .date()
    .transform((date) =>
      new Date(date).toLocaleDateString("en-US", DATE_OPTIONS),
    ),
  number: z.coerce
    .number()
    .min(1, { message: "Must be a number greater than 0" }),
  string: z.string(),
  stringMin1: z.string().min(1, { message: "Must be at least 1 character" }),
  stringToNumber: z.coerce.number(),
  stringToNumberWithMax: z.coerce.number().max(1000000),
  stringOptional: z.string().optional(),
  nonNegativeNumber: z.coerce.number().nonnegative({
    message: "Must be a positive number",
  }),
};
