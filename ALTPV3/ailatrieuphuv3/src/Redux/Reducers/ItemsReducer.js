import { SET_ASK_STATE, SET_IMG_ASK } from "../Contants/ActionsType";

const iState = "";
const setImgAskReducer = (state = iState, action) => {
  switch (action.type) {
    case SET_IMG_ASK:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
const setAskStateReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ASK_STATE:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
export { setAskStateReducer, setImgAskReducer };
