import { ReactNode } from "react";
import { useNavigate } from "react-router-dom"; // Used for temporary navigation to the home page

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { EMAIL_INPUT_ATTRS, PASSWORD_INPUT_ATTRS, INPUTS } from "../constant";
import {
  EntryValidationSchema,
  EntryValidationSchemaType,
} from "@utils/EntryValidationSchema";
import {
  Form,
  PortalTitle,
  InputContainer,
  Label,
  Button,
  Input,
  ErrText,
} from "../../Style/Portal.styled";
import { BlurContainer } from "../../Style/BlurContainer.styled";

export default function SignUpPortal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EntryValidationSchemaType>({
    mode: "onChange",
    resolver: zodResolver(EntryValidationSchema),
  });
  const onSubmit = (data: EntryValidationSchemaType) => {
    /* Here will be the logic of login authentication */
    console.log(data);
  };
  const navigate = useNavigate(); // Used for temporary navigation to the home page

  return (
    <BlurContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <PortalTitle>SignUp</PortalTitle>
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
        {/* Temporary navigation to the home page */}
        <Button type="submit" onClick={() => navigate("/Home")}>
          SignUp
        </Button>
      </Form>
    </BlurContainer>
  );
}
