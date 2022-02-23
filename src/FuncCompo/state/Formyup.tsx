import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const dat = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const Formyup = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(dat),
  });
  const onSu = (data: any) => {
    console.log({ data });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSu)}>
      <h2>Lets sign you in.</h2>
      <br />

      <input {...register("email")} placeholder="email" type="email" />
      <p>{errors.email?.message}</p>
      <br />

      <input {...register("password")} placeholder="password" type="password" />
      <p>{errors.password?.message}</p>
      <br />

      <button type="submit">Sign in</button>
    </form>
  );
};

export default Formyup;