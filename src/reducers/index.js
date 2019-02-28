import { combineReducers } from "redux";
import { recipes } from "./recipes";
import { localizeReducer } from "react-localize-redux";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  localize: localizeReducer,
  form: formReducer,
  recipes
});

export default rootReducer;
