import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required " })
    .email()
    .min(1, { message: "Phone number cant be empty" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, { message: "Password cant be empty" }),
});
export const resetPasswordEmailSchema = z.object({
  email: z.string({ required_error: "Email is required " }).email(),
});

export const otpSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});

export const newPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Your password must be more tehan 6 characters." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });


export const SignUpSchema = z.object({
  fullName: z.string({ required_error: "Should have Full name" }).min(1, { message: 'Full name should have at least 1 character' })
    .max(20, { message: 'Last name should have at most 20 characters' }),
  email: z.string({ required_error: "Should have email" })
    .email({ message: 'Invalid email address' }),
  password: z.string({ required_error: "Should have password" })
    .min(6, { message: 'Password should have at least 6 characters' }),
})



export const updateProfileSchema = z.object({
  fullName: z
    .string({ required_error: "Full Name is required " })
    .min(1, { message: "Full Name  cant be empty" }),
  phone: z
    .string({ required_error: "Phone Number is required" })
    .min(1, { message: "Phone Number cant be empty" }),
  address: z
    .string({ required_error: "Address is required" })
    .optional()
});

export const ChangePasswordSchema = z.object({
  oldPassword: z.string({
    required_error: 'Old password is required',
  }),
  newPassword: z.string({
    required_error: 'New password is required',
  }).min(6, {
    message: 'New password must be at least 6 characters long',
  }),
});