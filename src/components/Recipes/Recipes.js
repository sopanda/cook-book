import React, { PureComponent, Fragment } from "react";
import Recipe from "../Recipe";
import PropTypes from "prop-types";
import { Translate } from "react-localize-redux";
import classnames from "classnames";
import classes from "./Recipes.module.css";

class Recipes extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      recipesPerPage: 20
    };
  }

  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  render() {
    const { currentPage, recipesPerPage } = this.state;
    const { recipes, deleteRecipe } = this.props;
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(recipes.length / recipesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className={classnames(
            "pagination-link",
            currentPage === number ? "is-current" : null,
            classes.PagPage
          )}
        >
          {number}
        </li>
      );
    });

    return (
      <Fragment>
        <h1 className={classnames("title", classes.Title)}>
          <Translate id="recipes.title" />
        </h1>
        <div className="columns is-multiline is-centered is-mobile">
          {currentRecipes.map(recipe => (
            <div
              key={recipe.id}
              className="column is-one-third-desktop is-full-mobile is-half-tablet"
            >
              <Recipe
                recipe={recipe}
                isRecipePage={false}
                onDelete={deleteRecipe}
              />
            </div>
          ))}
        </div>
        <nav
          className="pagination is-right is-rounded"
          role="navigation"
          aria-label="pagination"
        >
          <ul className="pagination-list">{renderPageNumbers}</ul>
        </nav>
      </Fragment>
    );
  }
}

Recipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteRecipe: PropTypes.func.isRequired
};

export default Recipes;
