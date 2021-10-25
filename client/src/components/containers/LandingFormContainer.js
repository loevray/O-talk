import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../modules/account";
import { withRouter } from "react-router-dom";
import LandingForm from "../views/LandingPage/LandingForm";
import { changeInput, initialInput } from "../../modules/authForm";

const LandingFormContainer = (props) => {
  const [registerClick, setRegisterClick] = useState(false);
  const onToggleLogin = () => {
    setRegisterClick((prev) => !prev);
    clearInput();
  };
  const { email, nickname, password, confirmPassword } = useSelector(
    (state) => ({
      email: state.authForm.email,
      nickname: state.authForm.nickname,
      password: state.authForm.password,
      confirmPassword: state.authForm.confirmPassword,
    })
  );
  const dispatch = useDispatch();
  const handleRegister = (account) => dispatch(register(account));
  const handleLogin = (account) => dispatch(login(account));
  const onChange = (value) => dispatch(changeInput(value));
  const clearInput = () => dispatch(initialInput());
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    onChange({ name, value });
  };
  const onRegisterSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");
    }
    const account = {
      email,
      nickname,
      password,
      confirmPassword,
    };
    const register = await handleRegister(account);
    if (register.payload.success) {
      alert("회원가입 성공!");
      const login = await handleLogin(account);
      if (login.payload.loginSuccess) {
        props.history.push("/home");
      } else {
        alert("가입 도중 로그인 에러!");
      }
    } else {
      alert("회원가입 에러");
    }
  };
  const onLoginSubmit = (e) => {
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
  return (
    <LandingForm
      handleRegister={handleRegister}
      handleLogin={handleLogin}
      registerClick={registerClick}
      onChangeInput={onChangeInput}
      onRegisterSubmit={onRegisterSubmit}
      onLoginSubmit={onLoginSubmit}
      values={{ email, nickname, password, confirmPassword }}
      onToggleLogin={onToggleLogin}
    />
  );
};

export default withRouter(LandingFormContainer);
