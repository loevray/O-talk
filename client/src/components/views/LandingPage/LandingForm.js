import React from "react";
import styled from "styled-components";
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
                type="text"
                placeholder="이메일"
                required
                onChange={onChangeInput}
                value={email}
              />
              <LoginInputs
                name="nickname"
                type="text"
                placeholder="닉네임"
                value={nickname}
                onChange={onChangeInput}
                required
              />
              <LoginInputs
                name="password"
                type="password"
                placeholder="비밀번호"
                minLength="6"
                value={password}
                onChange={onChangeInput}
                required
              />
              <LoginInputs
                name="confirmPassword"
                type="password"
                placeholder="비밀번호 확인"
                minLength="6"
                value={confirmPassword}
                onChange={onChangeInput}
                required
              />
              <LoginBtnsRed type="submit">가입하기</LoginBtnsRed>
            </LoginForm>
          ) : (
            <LoginForm onSubmit={onLoginSubmit}>
              <LoginInputs
                name="email"
                type="text"
                placeholder="이메일"
                required
                onChange={onChangeInput}
                value={email}
              />
              <LoginInputs
                name="password"
                type="password"
                placeholder="비밀번호"
                minLength="6"
                value={password}
                onChange={onChangeInput}
                required
              />
              <LoginBtnsRed type="submit">로그인</LoginBtnsRed>
            </LoginForm>
          )}
        </LoginSections>
        <LoginSections>
          <LoginBtnsBlue>ㅍㅇㅅㅂ</LoginBtnsBlue>
          <LoginBtns>ㄱㄱ</LoginBtns>
        </LoginSections>
        <LoginSections>
          <button onClick={onToggleLogin}>
            {registerClick ? "로그인" : "가입하기"}
          </button>
        </LoginSections>
      </LoginWrap>
    </>
  );
};
const LoginWrap = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 70%;
  height: ${({ registerClick }) => (registerClick ? "80vh" : "72vh")};
  border-radius: 20px;
`;
const LoginSections = styled.section`
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;
const WelcomeMsg = styled.span`
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  color: #383738;
`;
const SmallMsg = styled.span`
  display: flex;
  padding-bottom: 15px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const LoginInputs = styled.input`
  width: 260px;
  height: 48px;
  border-radius: 18px;
  margin-bottom: 5px;
  border: 2px solid #d0d0d0;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #7e7e7e;
    padding-left: 10px;
    font-size: 1rem;
  }
`;
const LoginBtns = styled.button`
  width: 260px;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
  margin-top: 5px;
  height: 38px;
`;
const LoginBtnsRed = styled(LoginBtns)`
  background-color: #ea091f;
`;
const LoginBtnsBlue = styled(LoginBtns)`
  background-color: #1877f2;
`;

export default LandingForm;
