import { GET_RANDOM_QUESTION } from "../Contants/ActionsType";

const initialState = {};
const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_QUESTION:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
export { questionReducer };
