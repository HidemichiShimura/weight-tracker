import { ReactNode } from "react";

import { useForm } from "react-hook-form";

import { EMAIL_INPUT_ATTRS, PASSWORD_INPUT_ATTRS, INPUTS } from "./constant";
import {
  validationSchema,
  validationSchemaType,
} from "../../../utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  PortalTitle,
  InputContainer,
  Label,
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
      {INPUTS.map((input, idx) => {
        const attrs =
          input === "email" ? EMAIL_INPUT_ATTRS : PASSWORD_INPUT_ATTRS;
        const errMsg =
          input === "email"
            ? (errors.email?.message as ReactNode)
            : (errors.password?.message as ReactNode);

        return (
          <InputContainer key={idx}>
            <Label>
              {input.replace(input.charAt(0), input.charAt(0).toUpperCase())}
            </Label>
            <Input {...register(input)} {...attrs} />
            <ErrText>{errMsg}</ErrText>
          </InputContainer>
        );
      })}
      <Button type="submit">Login</Button>
    </Form>
  );
}
