import NewRecipeForm from "./NewRecipeForm";
import { reduxForm } from "redux-form";

export default reduxForm({
  form: "newRecipeForm"
})(NewRecipeForm);
