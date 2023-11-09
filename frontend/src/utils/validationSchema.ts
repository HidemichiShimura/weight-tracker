import { z } from "zod";

const errMsg = {
  email: {
    email: "This is an invalid email",
    min: "Enter your email",
  },
  password: {
    min: "Enter your password",
    max: "Your password length is 1 to 15",
    regex: "Enter alphanumeric characters",
  },
};

export const validationSchema = z
  .object({
    email: z.string().min(1, errMsg.email.min).email(errMsg.email.email),
    password: z
      .string()
      .min(1, errMsg.password.min)
      .max(15, errMsg.password.max)
      .regex(/^[\w]+$/, errMsg.password.regex),
  })
  .required();

export type validationSchemaType = z.infer<typeof validationSchema>;
