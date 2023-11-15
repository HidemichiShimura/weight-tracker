import {
  ErrText,
  Form,
  Input,
  InputContainer,
  Label,
  Button,
} from "../common/Form.styled";
import { DATE_INPUT_ATTRS } from "../common/attribute";

export default function DelForm() {
  return (
    <Form>
      <InputContainer>
        <Label>Date</Label>
        <Input {...DATE_INPUT_ATTRS} />
        <ErrText></ErrText>
      </InputContainer>
      <Button type="submit">Delete</Button>
    </Form>
  );
}
