import React, { memo } from "react";
import { Recipe } from "../Recipe";
import { Translate } from "react-localize-redux";
import classnames from "classnames";
import classes from "./Recipes.module.css";

export const Recipes = memo(({ recipes, deleteRecipe }) => {
  return (
    <div className="container">
      <h1 className={classnames("title", classes.Title)}>
        <Translate id="recipes.title" />
      </h1>
      <div className="columns is-multiline is-centered is-mobile">
        {recipes.map(recipe => (
          <div
            key={recipe.id}
            className="column is-one-third-desktop is-half-tablet is-full-mobile"
          >
            <Recipe
              recipe={recipe}
              isRecipePage={false}
              onDelete={deleteRecipe}
            />
          </div>
        ))}
      </div>
    </div>
  );
});
