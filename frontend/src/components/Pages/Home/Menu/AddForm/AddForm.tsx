import { useForm } from "react-hook-form";

import {
  ErrText,
  Form,
  Input,
  InputContainer,
  Label,
  Button,
} from "../common/Form.styled";
import { WEIGHT_INPUT_ATTRS, DATE_INPUT_ATTRS } from "../common/attribute";
import {
  AddValidationSchema,
  AddValidationSchemaType,
} from "@utils/CUDValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AddForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddValidationSchemaType>({
    mode: "onChange",
    resolver: zodResolver(AddValidationSchema),
  });

  const onSubmit = (data: AddValidationSchemaType) => {
    /* Here will be the logic of the create operation */
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Label>Weight</Label>
        <Input {...WEIGHT_INPUT_ATTRS} {...register("weight")} />
        <ErrText>{errors.weight?.message}</ErrText>
      </InputContainer>
      <InputContainer>
        <Label>Date</Label>
        <Input {...DATE_INPUT_ATTRS} {...register("date")} />
        <ErrText>{errors.date?.message}</ErrText>
      </InputContainer>
      <Button type="submit">Add</Button>
    </Form>
  );
}
