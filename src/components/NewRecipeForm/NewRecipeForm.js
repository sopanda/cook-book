import React from "react";
import { Field } from "redux-form";
import { Translate } from "react-localize-redux";
import { RenderField } from "../RenderField";
import { required, maxLength255, maxLength5000 } from "../../helpers";
import classnames from "classnames";
import classes from "./NewRecipeForm.module.css";

const NewRecipeForm = ({ handleSubmit, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="control">
        <Field
          name="title"
          component={RenderField}
          type="text"
          label={<Translate id="newRecipe.titleField" />}
          validate={[required, maxLength255]}
        />
      </div>
      <div className="control">
        <Field
          name="recipe"
          component={RenderField}
          type="textarea"
          label={<Translate id="newRecipe.description" />}
          validate={[required, maxLength5000]}
        />
      </div>
      <div className="control">
        <button
          type="submit"
          className={classnames(
            "button is-danger is-pulled-right",
            classes.Submit
          )}
          disabled={submitting}
        >
          <Translate id="newRecipe.submit" />
        </button>
      </div>
    </form>
  );
};

export default NewRecipeForm;
