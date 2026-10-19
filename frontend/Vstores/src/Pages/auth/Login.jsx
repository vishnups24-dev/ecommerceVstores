import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import CommonForm from "../../components/Common/Form.jsx";
import { loginFormControls } from "../../config/index.js";
const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [formData, setFormData] = useState(initialState);
  function onSubmit() {}
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p>
          Don't have an account?
        <NavLink
          to="/auth/register"
          className=" hover:underline text-blue-500 mt-2"
        >
          register
        </NavLink>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign Up"}
        setFormData={setFormData}
        onSubmit={onSubmit}
        formData={formData}
      />
    </div>
  );
};

export default Login;
