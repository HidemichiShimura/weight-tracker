import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export const EMAIL_INPUT_ATTRS: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> = {
  type: "email",
  name: "email",
  autoComplete: "email",
  placeholder: "example@example.com",
};
export const PASSWORD_INPUT_ATTRS: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> = {
  type: "password",
  name: "password",
  autoComplete: "password",
  placeholder: "Password",
};
export const required = {
  email: "Enter your email",
  password: "Enter your password",
};
