import data from "../helpers/data.json";

const initialState = {
  recipes: [...data],
  actualRecipes: [],
  recipe: {}
};

export function recipes(state = initialState, action) {
  switch (action.type) {
    case "FETCH_RECIPES":
      return {
        ...state,
        actualRecipes: state.recipes.filter(
          recipe => recipe.lang === action.payload
        )
      };
    case "DELETE_RECIPE":
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
      };
    case "FETCH_RECIPE_BY_ID":
      return {
        ...state,
        recipe: state.recipes.find(obj => {
          return obj.id === Number(action.payload);
        })
      };
    case "ADD_LIKE":
      return {
        ...state,
        recipes: state.recipes.map(recipe => {
          return Number(action.payload) === recipe.id
            ? Object.assign({}, recipe, { likes: recipe.likes + 1 })
            : recipe;
        })
      };
    case "ADD_VIEW":
      return {
        ...state,
        recipes: state.recipes.map(recipe => {
          return Number(action.payload) === recipe.id
            ? Object.assign({}, recipe, { views: recipe.views + 1 })
            : recipe;
        })
      };
    default:
      return state;
  }
}
