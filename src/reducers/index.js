import { combineReducers } from "redux";
import { recipes } from "./receipes";
import { localizeReducer } from "react-localize-redux";

const rootReducer = combineReducers({
  localize: localizeReducer,
  recipes
});

export default rootReducer;
