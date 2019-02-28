import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Recipe from "../../components/Recipe";
import PropTypes from "prop-types";
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

    return recipe && Object.entries(recipe).length !== 0 ? (
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

RecipePage.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    recipe: PropTypes.string,
    likes: PropTypes.number,
    views: PropTypes.number,
    date: PropTypes.any,
    photo: PropTypes.string
  })
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipePage);
