import React, { memo } from "react";
import NoImage from "../../assets/NoImage.png";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import classes from "./Recipe.module.css";
import classnames from "classnames";

export const Recipe = memo(({ recipe, isRecipePage, onDelete, onLike }) => {
  let icon = isRecipePage ? (
    <a
      className={classnames(
        "card-footer-item column has-text-centered",
        classes.Trash
      )}
      href="#!"
      onClick={() => onLike(recipe.id)}
    >
      <span className="icon is-small has-text-danger">
        <i className="fas fa-heart" aria-hidden="true" />
      </span>
    </a>
  ) : (
    <a
      className={classnames(
        "card-footer-item column has-text-centered",
        classes.Trash
      )}
      onClick={() => onDelete(recipe.id)}
      href="#!"
    >
      <span className="icon is-small has-text-danger">
        <i className="fas fa-trash" aria-hidden="true" />
      </span>
    </a>
  );
  return (
    <div className="card">
      <Link to={`/recipe/${recipe.id}`} className="card-image">
        <figure className="image is-4by3">
          <img src={recipe.imgUrl || NoImage} alt="Recipe" />
        </figure>
      </Link>
      <div className="card-content">
        <div className="content">
          <p className={classnames("title is-4", classes.Title)}>
            {recipe.title}
          </p>
          <div className="subtitle">
            <span
              className={classnames(
                "icon is-small has-text-danger",
                classes.Views
              )}
            >
              <i className="fas fa-eye" aria-hidden="true" />
              <span>{recipe.views}</span>
            </span>
            <span
              className={classnames(
                "icon is-small has-text-danger",
                classes.Likes
              )}
            >
              <i className="fas fa-heart" aria-hidden="true" />
              <span>{recipe.likes}</span>
            </span>
          </div>
          {isRecipePage ? <p>{recipe.recipe}</p> : null}
          <footer className="card-footer columns">
            <span className="card-footer-item is-10 column">
              Created at
              <Moment format="HH:mm DD-MM-YYYY" className={classes.DateTime}>
                {recipe.date}
              </Moment>
            </span>
            {icon}
          </footer>
        </div>
      </div>
    </div>
  );
});
