import { SET_Q_NUMBER } from "../Contants/ActionsType";

const initialNumber = 1;
export const qNumberReducer = (state = initialNumber, action) => {
  switch (action.type) {
    case SET_Q_NUMBER:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
