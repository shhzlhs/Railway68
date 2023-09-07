import { GET_CATEGORIES } from "../Contants/ActionsType";

var initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      state = action.payload;
      return [...state];
    default:
      return [...state];
  }
};
export { categoriesReducer };
