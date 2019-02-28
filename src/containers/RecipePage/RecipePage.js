import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Recipe from "../../components/Recipe";
import { fetchRecipeById, like, view } from "../../actions/recipes";
import classes from "./RecipePage.module.css";

class RecipePage extends PureComponent {
  componentDidMount() {
    const {
      onFetchRecipeById,
      addView,
      match: {
        params: { id }
      }
    } = this.props;
    onFetchRecipeById(id);
    addView(id);
  }

  render() {
    const { recipe, onLike } = this.props;

    return recipe ? (
      <div className={classes.Wrapper}>
        <div className="columns is-desktop">
          <div className="column">
            <Recipe recipe={recipe} isRecipePage={true} onLike={onLike} />
          </div>
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    recipe: state.recipes.recipe
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchRecipeById: id => dispatch(fetchRecipeById(id)),
    onLike: id => dispatch(like(id)),
    addView: id => dispatch(view(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipePage);
