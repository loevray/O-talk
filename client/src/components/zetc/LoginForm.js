import React, { useState } from "react";

const LoginForm = ({ handleLogin, props }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const account = {
      email,
      password,
    };
    handleLogin(account).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/home");
      } else {
        alert("로그인 에러");
      }
    });
  };
  return <></>;
};

export default LoginForm;
