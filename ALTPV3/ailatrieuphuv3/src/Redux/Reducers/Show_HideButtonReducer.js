import {
  HIDE_5050,
  HIDE_ASK,
  HIDE_GG,
  HIDE_REVIEW,
  SHOW_5050,
  SHOW_ASK,
  SHOW_GG,
  SHOW_REVIEW,
} from "../Contants/ActionsType";

const iState = false;
const b_5050Reducer = (state = iState, action) => {
  switch (action.type) {
    case HIDE_5050:
      return true;
    case SHOW_5050:
      return false;
    default:
      return state;
  }
};
const ggReducer = (state = iState, action) => {
  switch (action.type) {
    case HIDE_GG:
      return true;
    case SHOW_GG:
      return false;
    default:
      return state;
  }
};
const askReducer = (state = iState, action) => {
  switch (action.type) {
    case HIDE_ASK:
      return true;
    case SHOW_ASK:
      return false;
    default:
      return state;
  }
};
const reviewReducer = (state = iState, action) => {
  switch (action.type) {
    case HIDE_REVIEW:
      return true;
    case SHOW_REVIEW:
      return false;
    default:
      return state;
  }
};

export { b_5050Reducer, ggReducer, askReducer, reviewReducer };
