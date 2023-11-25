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
import { deleteData } from "@utils/functions";
import { useIsDataUpdated } from "../../../../../hooks/useIsDataUpdated";

export default function DelForm() {
  const { setIsDataUpdated } = useIsDataUpdated();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DelValidationSchemaType>({
    mode: "onChange",
    resolver: zodResolver(DelValidationSchema),
  });

  const onSubmit = async (data: DelValidationSchemaType) => {
    /* Here will be the logic of the delete operation */
    try {
      const isDelSuceeded = await deleteData(data);
      const msg = isDelSuceeded
        ? "Data deletion succeeded!"
        : "Data deletion succeeded!";

      console.log(msg);
      setIsDataUpdated(true);
    } catch (err) {
      console.log(err);
    }
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
