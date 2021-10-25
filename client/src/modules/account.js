import axios from "axios";

const LOGIN = "account/LOGIN";
const REGISTER = "account/REGISTER";
const AUTH = "account/AUTH";

//액션 생성 함수들

//로그인
export const login = async (account) => {
  const request = await axios.post("/api/users/login", account);
  return {
    type: LOGIN,
    payload: request.data,
  };
};
//회원가입
export const register = async (account) => {
  const request = await axios.post("/api/users/register", account);
  return {
    type: REGISTER,
    payload: request.data,
  };
};
//인증
export const auth = async () => {
  const request = await axios.get("/api/users/auth");
  return {
    type: AUTH,
    payload: request.data,
  };
};

//초기값
const initailState = {};

//리듀서
export default function account(state = initailState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, loginSuccess: action.payload };
    case REGISTER:
      return { ...state, register: action.payload };
    case AUTH:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
