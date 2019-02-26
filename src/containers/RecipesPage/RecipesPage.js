import React, { PureComponent } from "react";
import { Recipes } from "../../components/Recipes";
import { fetchRecipes, deleteRecipe } from "../../actions/recipes";
import { withLocalize } from "react-localize-redux";
import { connect } from "react-redux";

class RecipesPage extends PureComponent {
  componentDidMount() {
    const { activeLanguage, onFetchRecipes } = this.props;
    onFetchRecipes(activeLanguage.code);
  }

  componentDidUpdate(prevProps) {
    const { activeLanguage, onFetchRecipes } = this.props;
    if (prevProps.activeLanguage.code !== activeLanguage.code) {
      onFetchRecipes(activeLanguage.code);
    }
  }

  handleDeleteRecipe = id => {
    const { activeLanguage, onDeleteRecipe } = this.props;
    onDeleteRecipe(id, activeLanguage.code);
  };

  render() {
    const { recipes } = this.props;
    return <Recipes recipes={recipes} deleteRecipe={this.handleDeleteRecipe} />;
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes.actualRecipes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchRecipes: code => dispatch(fetchRecipes(code)),
    onDeleteRecipe: (id, code) => dispatch(deleteRecipe(id, code))
  };
};

export default withLocalize(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RecipesPage)
);