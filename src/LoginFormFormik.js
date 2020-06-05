import React from "react";
import logIn from "./log-in.png";
import {useFormik} from 'formik'
import * as Yup from 'yup'

export const LoginForm = () => {
  const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
    initialValues: {
      login: '',
      password: ''
    },
    validationSchema: Yup.object({
      login: Yup.string().max(10, 'Login must be shorter than 10 characters').required('Required'),
      password: Yup.string().min(6, 'Password should be longer than 6 characters').required()
    }),
    onSubmit: ({login, password}) => {
      alert(`Login: ${login}, password: ${password}`);
    }
  })

  return (
    <form onSubmit={handleSubmit}>
      <header>
        <img width="60" src={logIn} alt="log in" />
      </header>
      <label htmlFor="login">Login</label>
      <input
        value={values.login}
        onChange={handleChange}
        onBlur={handleBlur}
        id="login"
        name="login"
        type="text"
      />
      {touched.login && errors.login ? (
        <div>{errors.login}</div>
      ): null}
      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        name="password"
        type="password"
      />
      {touched.password && errors.password ? (
        <div>{errors.password}</div>
      ): null}
      <button type="submit">Log in</button>
    </form>
  );
};
