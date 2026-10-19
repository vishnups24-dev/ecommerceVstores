import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import CommonForm from '../../components/Common/Form.jsx'
import { registerFormControls } from '../../config/index.js';
const initialState={
  userName:"",
  email:'',
  password: ''
}
const Register = () => {
  const [formData,setFormData]= useState(initialState)
  function onSubmit(){

  }
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new Account
        </h1>
        <p>
          Already have an account?
        <NavLink
          to="/auth/register"
          className=" hover:underline text-blue-500 mt-2"
        >
          login
        </NavLink>
        </p>
      </div>
      <CommonForm
      formControls={registerFormControls}
      buttonText={'Sign Up'}
      setFormData={setFormData}
      onSubmit={onSubmit}
      formData={formData}
      
      />
      
      
    </div>
  )
}

export default Register
