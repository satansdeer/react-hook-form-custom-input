import React from 'react'

export const FormInput = ({register, errors, label, id, ...inputProps}) => {
  return <>
    <label htmlFor={id}>{label}</label>
    <input
      ref={register}
      id={id}
      name="password"
      type="password"
    />
    {errors.password && <div>{errors.password.message}</div>} 
  </>
}