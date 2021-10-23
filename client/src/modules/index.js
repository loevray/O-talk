import { combineReducers } from "redux";
import account from "./account";
import authForm from "./authForm";

const rootReducer = combineReducers({
  account,
  authForm,
});

export default rootReducer;
