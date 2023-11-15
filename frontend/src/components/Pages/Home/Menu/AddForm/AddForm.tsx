import { DetailedHTMLProps, InputHTMLAttributes } from "react";

import {
  ErrText,
  Form,
  Input,
  InputContainer,
  Label,
  Button,
} from "../common/Form.styled";
import { WEIGHT_INPUT_ATTRS, DATE_INPUT_ATTRS } from "../common/attribute";

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
