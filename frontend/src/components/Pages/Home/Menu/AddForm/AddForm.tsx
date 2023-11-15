import { DetailedHTMLProps, InputHTMLAttributes } from "react";

import {
  ErrText,
  Form,
  Input,
  InputContainer,
  Label,
  Button,
} from "../common/Form.styled";

export const WEIGHT_INPUT_ATTRS: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> = {
  type: "number",
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

export default function AddForm() {
  return (
    <Form>
      <InputContainer>
        <Label>Weight</Label>
        <Input {...WEIGHT_INPUT_ATTRS} />
        <ErrText></ErrText>
      </InputContainer>
      <InputContainer>
        <Label>Date</Label>
        <Input {...DATE_INPUT_ATTRS} />
        <ErrText></ErrText>
      </InputContainer>
      <Button type="submit">Add</Button>
    </Form>
  );
}
