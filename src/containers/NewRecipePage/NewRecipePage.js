import React, { Component } from "react";
import NewRecipeForm from "../../components/NewRecipeForm";
import { Translate } from "react-localize-redux";
import classes from "./NewRecipePage.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { withLocalize } from "react-localize-redux";
import { newRecipe } from "../../actions/recipes";
import { history } from "../../helpers";

class NewRecipePage extends Component {
  submit = recipe => {
    const { onNewRecipe, activeLanguage } = this.props;
    onNewRecipe(recipe, activeLanguage.code);
    history.push("/");
  };

  render() {
    return (
      <div className={classnames("columns is-centered", classes.Wrapper)}>
        <div className="column is-half has-text-centered">
          <h1 className="title">
            <Translate id="newRecipe.title" />
          </h1>
          <NewRecipeForm onSubmit={this.submit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNewRecipe: (recipe, code) => dispatch(newRecipe(recipe, code))
  };
};

NewRecipePage.propTypes = {
  onNewRecipe: PropTypes.func.isRequired,
  activeLanguage: PropTypes.object.isRequired
};

export default withLocalize(
  connect(
    null,
    mapDispatchToProps
  )(NewRecipePage)
);
