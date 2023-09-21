import { GET_AUTHORS } from "../Contants/ActionsType";

const initialState = [];

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORS:
      state = action.payload;
      return [...state];

    default:
      return [...state];
  }
};
export { authorReducer };
