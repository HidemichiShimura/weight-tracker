import { ReactNode } from "react";

import { useForm } from "react-hook-form";

import { EMAIL_INPUT_ATTRS, PASSWORD_INPUT_ATTRS, required } from "./constant";

export default function LoginPortal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    /* Here will be the logic of login authentication */
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        {...register("email", { required: required.email })}
        {...EMAIL_INPUT_ATTRS}
      />
      <p>{errors.email?.message as ReactNode}</p>
      <label>Password</label>
      <input
        {...register("password", { required: required.password })}
        {...PASSWORD_INPUT_ATTRS}
      />
      <button type="submit">Login</button>
    </form>
  );
}
