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
  ModValidationSchema,
  ModValidationSchemaType,
} from "@utils/CUDValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { patchData } from "@utils/functions";

export default function ModForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ModValidationSchemaType>({
    mode: "onChange",
    resolver: zodResolver(ModValidationSchema),
  });

  const onSubmit = async (data: ModValidationSchemaType) => {
    /* Here will be the logic of the update operation */
    console.log(data);

    try {
      const msg = await patchData(data);

      console.log(msg);
    } catch (err) {
      console.log(err);
    }
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
      <Button type="submit">Modify</Button>
    </Form>
  );
}
