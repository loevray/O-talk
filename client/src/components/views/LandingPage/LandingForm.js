import React from "react";
import styled, { keyframes } from "styled-components";
import { ReactComponent as LandingPageIcon2 } from "../../../svg/LandingPageIcon2.svg";

const LandingForm = ({
  registerClick,
  onChangeInput,
  onRegisterSubmit,
  onLoginSubmit,
  values,
  onToggleLogin,
}) => {
  const { email, nickname, password, confirmPassword } = values;
  return (
    <>
      <LoginWrap registerClick={registerClick}>
        <LoginSections>
          <LandingPageIcon2 style={{ width: "50px" }} />
          <WelcomeMsg>
            O'talk에 오신것을
            <br />
            환영합니다.
          </WelcomeMsg>
          {registerClick && <SmallMsg>다양한 이야기를 나눠보기</SmallMsg>}
        </LoginSections>
        <LoginSections>
          {registerClick ? (
            <LoginForm onSubmit={onRegisterSubmit}>
              <LoginInputs
                name="email"
                type="email"
                placeholder="이메일"
                autoComplete="email"
                required
                onChange={onChangeInput}
                value={email}
              />
              <LoginInputs
                name="password"
                type="password"
                placeholder="비밀번호"
                autoComplete="new-password"
                minLength="6"
                value={password}
                onChange={onChangeInput}
                required
              />
              <LoginInputs
                name="confirmPassword"
                type="password"
                placeholder="비밀번호 확인"
                autoComplete="new-password"
                minLength="6"
                value={confirmPassword}
                onChange={onChangeInput}
                required
              />
              <LoginInputs
                name="nickname"
                type="text"
                autoComplete="username"
                placeholder="닉네임"
                value={nickname}
                onChange={onChangeInput}
                required
              />
              <LoginBtnsRed type="submit">가입하기</LoginBtnsRed>
            </LoginForm>
          ) : (
            <LoginForm onSubmit={onLoginSubmit}>
              <LoginInputs
                name="email"
                type="email"
                placeholder="이메일"
                required
                onChange={onChangeInput}
                value={email}
                autoComplete="email"
              />
              <LoginInputs
                name="password"
                type="password"
                placeholder="비밀번호"
                minLength="6"
                value={password}
                onChange={onChangeInput}
                autoComplete="current-password"
                required
              />
              <LoginBtnsRed type="submit">로그인</LoginBtnsRed>
            </LoginForm>
          )}
          <OrText>또는</OrText>
          <LoginBtns>ㄱㄱ</LoginBtns>
          <LoginBtnsBlue>ㅍㅇㅅㅂ</LoginBtnsBlue>
        </LoginSections>
        <LoginSections>
          <ToggleText onClick={onToggleLogin}>
            {registerClick
              ? "기존 계정으로 로그인"
              : "O'talk이 처음이신가요? 가입하기"}
          </ToggleText>
        </LoginSections>
      </LoginWrap>
    </>
  );
};
const LoginWrap = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 65%;
  height: ${({ registerClick }) => (registerClick ? "720px" : "640px")};
  background-color: transparent;
  box-shadow: -1px 4px 15px 3px rgba(0, 0, 0, 0.75);
  border-radius: 28px;
  transition: all ease 0.55s;
  @media screen and (max-width: 500px) {
    height: ${({ registerClick }) => (registerClick ? "90vh" : "80vh")};
    width: 100%;
    background-color: transparent;
    box-shadow: none;
  }
`;
const LoginSections = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const WelcomeMsg = styled.span`
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;
  color: #f3f3ff;
  @media screen and (max-width: 500px) {
    font-size: 1.7rem;
  }
`;
const SmallMsg = styled.span`
  display: flex;
  font-size: 1rem;
  padding-bottom: 15px;
  color: #f3f3ff;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginInputs = styled.input`
  width: 240px;
  height: 44px;
  border-radius: 18px;
  margin-bottom: 8px;
  font-size: 1rem;
  padding: 0 15px 0 15px;
  border: 2px solid #d0d0d0;
  background-color: white;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #7e7e7e;
    font-size: 1rem;
  }
  :focus {
    outline: 5px solid #7fc1ff;
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
  }
  :-webkit-autofill::first-line {
    font-size: 1rem;
  }
  @media screen and (max-width: 500px) {
    width: 180px;
    height: 35px;
  }
`;
const LoginBtns = styled.button`
  cursor: pointer;
  width: 270px;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
  margin-top: 5px;
  height: 39px;
  background-color: #1877f2;
  @media screen and (max-width: 500px) {
    width: 210px;
    height: 35px;
  }
`;
const LoginBtnsRed = styled(LoginBtns)`
  background-color: #ea091f;
`;
const LoginBtnsBlue = styled(LoginBtns)`
  background-color: #002286;
`;
const OrText = styled.span`
  display: inline-block;
  padding: 7px 0 7px 0;
  color: #f3f3ff;
  font-weight: bold;
`;
const ToggleText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #f3f3ff;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export default LandingForm;
