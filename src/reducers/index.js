import { combineReducers } from "redux";
import { recipes } from "./recipes";
import { localizeReducer } from "react-localize-redux";

const rootReducer = combineReducers({
  localize: localizeReducer,
  recipes
});

export default rootReducer;
