import { ReactNode } from "react";

import { useForm } from "react-hook-form";

import { EMAIL_INPUT_ATTRS, PASSWORD_INPUT_ATTRS } from "./constant";
import { validationSchema } from "../../../utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPortal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: LoginForm) => {
    /* Here will be the logic of login authentication */
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input {...register("email")} {...EMAIL_INPUT_ATTRS} />
      <p>{errors.email?.message as ReactNode}</p>
      <label>Password</label>
      <input {...register("password")} {...PASSWORD_INPUT_ATTRS} />
      <p>{errors.password?.message as ReactNode}</p>
      <button type="submit">Login</button>
    </form>
  );
}
