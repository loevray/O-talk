const CHANGE_INPUT = "authForm/CHANGE_INPUT";
const INITIALIZE_FORM = "authForm/INITIALIZE_FORM";

//액션 생성 함수
export const changeInput = (value) => {
  return { type: CHANGE_INPUT, value };
};

export const initialInput = () => {
  return { type: INITIALIZE_FORM };
};

const initialState = {
  email: "",
  nickname: "",
  password: "",
  confirmPassword: "",
};

export default function authForm(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, [action.value.name]: action.value.value };
    case INITIALIZE_FORM:
      return { ...initialState };
    default:
      return { ...state };
  }
}
