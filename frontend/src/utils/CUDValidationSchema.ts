import { z } from "zod";

const ERR_MSG = {
  weight: {
    invalid_type_error: "Weight must be a number",
    min: "Enter your weight",
    positive: "Enter a positive number",
    finite: "This is an invalid number",
  },
  date: {
    min: "This is an invalid date",
    max: "You can't enter date until today",
  },
};

export const AddValidationSchema = z
  .object({
    weight: z.coerce
      .number({
        invalid_type_error: ERR_MSG.weight.invalid_type_error,
      })
      .min(1, ERR_MSG.weight.min)
      .positive(ERR_MSG.weight.positive)
      .finite(ERR_MSG.weight.finite),
    date: z.coerce
      .date()
      .min(new Date("1900-01-01"), ERR_MSG.date.min)
      .max(new Date(), ERR_MSG.date.max),
  })
  .required();
export const ModValidationSchema = z
  .object({
    weight: z.coerce
      .number({
        invalid_type_error: ERR_MSG.weight.invalid_type_error,
      })
      .min(1, ERR_MSG.weight.min)
      .positive(ERR_MSG.weight.positive)
      .finite(ERR_MSG.weight.finite),
    date: z.coerce
      .date()
      .min(new Date("1900-01-01"), ERR_MSG.date.min)
      .max(new Date(), ERR_MSG.date.max),
  })
  .required();
export const DelValidationSchema = z
  .object({
    date: z.coerce
      .date()
      .min(new Date("1900-01-01"), ERR_MSG.date.min)
      .max(new Date(), ERR_MSG.date.max),
  })
  .required();

export type AddValidationSchemaType = z.infer<typeof AddValidationSchema>;
export type ModValidationSchemaType = z.infer<typeof ModValidationSchema>;
export type DelValidationSchemaType = z.infer<typeof DelValidationSchema>;
