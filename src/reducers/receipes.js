import data from "../helpers/data.json";

const initialState = {
  recipes: [...data],
  recipe: []
};

export function recipes(state = initialState, action) {
  return state;
}
