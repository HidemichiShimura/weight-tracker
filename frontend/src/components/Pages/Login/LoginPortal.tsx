import { ReactNode } from "react";

import { useForm } from "react-hook-form";

import { EMAIL_INPUT_ATTRS, PASSWORD_INPUT_ATTRS } from "./constant";
import {
  validationSchema,
  validationSchemaType,
} from "../../../utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  PortalTitle,
  InputContainer,
  Button,
  Input,
  ErrText,
} from "./LoginPortal.styled";

export default function LoginPortal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<validationSchemaType>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: validationSchemaType) => {
    /* Here will be the logic of login authentication */
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <PortalTitle>Login</PortalTitle>
      <InputContainer>
        <label>Email</label>
        <Input {...register("email")} {...EMAIL_INPUT_ATTRS} />
        <ErrText>{errors.email?.message as ReactNode}</ErrText>
      </InputContainer>
      <InputContainer>
        <label>Password</label>
        <Input {...register("password")} {...PASSWORD_INPUT_ATTRS} />
        <ErrText>{errors.password?.message as ReactNode}</ErrText>
      </InputContainer>
      <Button type="submit">Login</Button>
    </Form>
  );
}
