import { useForm } from "react-hook-form";

import {
  ErrText,
  Form,
  Input,
  InputContainer,
  Label,
  Button,
} from "../common/Form.styled";
import { DATE_INPUT_ATTRS } from "../common/attribute";
import {
  DelValidationSchema,
  DelValidationSchemaType,
} from "@utils/CUDValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function DelForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DelValidationSchemaType>({
    mode: "onChange",
    resolver: zodResolver(DelValidationSchema),
  });

  const onSubmit = (data: DelValidationSchemaType) => {
    /* Here will be the logic of the delete operation */
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Label>Date</Label>
        <Input {...DATE_INPUT_ATTRS} {...register("date")} />
        <ErrText>{errors.date?.message}</ErrText>
      </InputContainer>
      <Button type="submit">Delete</Button>
    </Form>
  );
}
