import {
  CLOSE_ASK_MODAL,
  CLOSE_CLICK_STOP_MODAL,
  CLOSE_CORRECT_MODAL,
  CLOSE_PRO_MODAL,
  CLOSE_REVIEW_MODAL,
  CLOSE_STOP_PLAY_MODAL,
  CLOSE_WRONG_MODAL,
  SHOW_ASK_MODAL,
  SHOW_CLICK_STOP_MODAL,
  SHOW_CORRECT_MODAL,
  SHOW_PRO_MODAL,
  SHOW_REVIEW_MODAL,
  SHOW_STOP_PLAY_MODAL,
  SHOW_WRONG_MODAL,
} from "../Contants/ActionsType";

const iState = false;

const showReviewModalReducer = (state = iState, action) => {
  switch (action.type) {
    case SHOW_REVIEW_MODAL:
      return true;
    case CLOSE_REVIEW_MODAL:
      return false;
    default:
      return state;
  }
};
const showAskModalReducer = (state = iState, action) => {
  switch (action.type) {
    case SHOW_ASK_MODAL:
      return true;
    case CLOSE_ASK_MODAL:
      return false;
    default:
      return state;
  }
};
const showProModalReducer = (state = iState, action) => {
  switch (action.type) {
    case SHOW_PRO_MODAL:
      return true;
    case CLOSE_PRO_MODAL:
      return false;
    default:
      return state;
  }
};
const showCorrectModalReducer = (state = iState, action) => {
  switch (action.type) {
    case SHOW_CORRECT_MODAL:
      return true;
    case CLOSE_CORRECT_MODAL:
      return false;
    default:
      return state;
  }
};
const showWrongModalReducer = (state = iState, action) => {
  switch (action.type) {
    case SHOW_WRONG_MODAL:
      return true;
    case CLOSE_WRONG_MODAL:
      return false;
    default:
      return state;
  }
};
const showStopPlayModalReducer = (state = iState, action) => {
  switch (action.type) {
    case SHOW_STOP_PLAY_MODAL:
      return true;
    case CLOSE_STOP_PLAY_MODAL:
      return false;
    default:
      return state;
  }
};
const showClickStopPlayModalReducer = (state = iState, action) => {
  switch (action.type) {
    case SHOW_CLICK_STOP_MODAL:
      return true;
    case CLOSE_CLICK_STOP_MODAL:
      return false;
    default:
      return state;
  }
};
export {
  showAskModalReducer,
  showReviewModalReducer,
  showProModalReducer,
  showCorrectModalReducer,
  showWrongModalReducer,
  showStopPlayModalReducer,
  showClickStopPlayModalReducer,
};
