import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";
import { myProjectReducer } from "./MyProjectsReducer";
import { myInstallationsReducer } from "./MyInstallationsReducer";

const rootReducer = combineReducers({
  loginReducer,
  myProjectReducer,
  myInstallationsReducer,
});

export default rootReducer;
