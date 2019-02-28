import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NoImage from "../../assets/NoImage.png";
import Moment from "react-moment";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import classes from "./Recipe.module.css";
import classnames from "classnames";
import { useOpen } from "../../hooks";
import { Translate } from "react-localize-redux";

const Recipe = ({ recipe, isRecipePage, onDelete, onLike }) => {
  const { isOpen, toggle } = useOpen();

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
      onClick={() => toggle()}
      href="#!"
    >
      <span className="icon is-small has-text-danger">
        <i className="fas fa-trash" aria-hidden="true" />
      </span>
    </a>
  );
  return (
    <div className="card">
      <Link
        to={`/recipe/${recipe.id}`}
        className="card-image"
        style={isRecipePage ? { pointerEvents: "none" } : null}
      >
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
            <span className={classnames("icon has-text-danger", classes.Views)}>
              <i className="fas fa-eye" aria-hidden="true" />
              <span>{recipe.views}</span>
            </span>
            <span className={classnames("icon has-text-danger", classes.Likes)}>
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
      {!isRecipePage && isOpen ? (
        <Modal
          closeModal={toggle}
          modalState={isOpen}
          deleteRecipe={() => onDelete(recipe.id)}
          title={<Translate id="deleteRecipe.modalTitle" />}
        >
          <Fragment>
            <Translate id="deleteRecipe.question" />
            <span className="has-text-danger">{` ${recipe.title} ?`}</span>
          </Fragment>
        </Modal>
      ) : null}
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    recipe: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    date: PropTypes.any.isRequired,
    photo: PropTypes.string
  }),
  isRecipePage: PropTypes.bool.isRequired,
  onDelete: PropTypes.func,
  onLike: PropTypes.func
};

export default Recipe;
