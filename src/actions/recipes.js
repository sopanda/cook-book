import { notify } from "../helpers";
import {
  NEW_RECIPE,
  FETCH_RECIPES,
  DELETE_RECIPE,
  FETCH_RECIPE_BY_ID,
  ADD_LIKE,
  ADD_VIEW
} from "../constants";

export function fetchRecipes(code) {
  return {
    type: FETCH_RECIPES,
    payload: code
  };
}

export function deleteRecipe(id, code) {
  return dispatch => {
    dispatch(onDelete(id));
    setTimeout(() => dispatch(fetchRecipes(code)), 100);
  };

  function onDelete(id) {
    return {
      type: DELETE_RECIPE,
      payload: id
    };
  }
}

export function fetchRecipeById(id) {
  return {
    type: FETCH_RECIPE_BY_ID,
    payload: id
  };
}

export function like(id) {
  return dispatch => {
    dispatch(likeRecipe(id));
    setTimeout(() => dispatch(fetchRecipeById(id)), 100);
  };

  function likeRecipe(id) {
    return {
      type: ADD_LIKE,
      payload: id
    };
  }
}

export function view(id) {
  return dispatch => {
    dispatch(viewRecipe(id));
    setTimeout(() => dispatch(fetchRecipeById(id)), 100);
  };

  function viewRecipe(id) {
    return {
      type: ADD_VIEW,
      payload: id
    };
  }
}

export function newRecipe(recipe, code) {
  return dispatch => {
    dispatch(addRecipe(recipe, code));
    setTimeout(() => notify(), 100);
  };

  function addRecipe(recipe, code) {
    return {
      type: NEW_RECIPE,
      recipe: recipe,
      code: code
    };
  }
}
