import React from "react";
import logIn from "./log-in.png";
import {useForm} from 'react-hook-form'
import * as Yup from 'yup'
import { FormInput } from "./FormInput";

export const LoginForm = () => {
  const {register, handleSubmit, errors} = useForm({
    mode: 'onBlur',
    validationSchema: Yup.object({
      login: Yup.string().max(10, 'Login must be shorter than 10 characters').required('Required'),
      password: Yup.string().min(6, 'Password should be longer than 6 characters').required('Required')
    }),
  })

  const onSubmit = ({login, password}) => {
    alert(`Login: ${login}, password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <header>
        <img width="60" src={logIn} alt="log in" />
      </header>
      <FormInput 
        id="login"
        name="login"
        type="text"
        label="Login"
        register={register}
        error={errors.login}
      />
      <FormInput 
        id="password"
        type="password"
        name="password"
        label="Password"
        register={register}
        error={errors.password}
      />
      <button type="submit">Log in</button>
    </form>
  );
};
