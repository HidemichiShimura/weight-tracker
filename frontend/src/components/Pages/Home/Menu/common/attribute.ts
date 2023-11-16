import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export const WEIGHT_INPUT_ATTRS: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> = {
  name: "weight",
  placeholder: "65",
};

export const DATE_INPUT_ATTRS: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> = {
  type: "date",
  name: "date",
  placeholder: "2023-11-16",
};
