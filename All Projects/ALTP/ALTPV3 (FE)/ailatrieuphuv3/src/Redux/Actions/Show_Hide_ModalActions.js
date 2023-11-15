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

const showReviewModal = () => {
  return {
    type: SHOW_REVIEW_MODAL,
  };
};
const closeReviewModal = () => {
  return {
    type: CLOSE_REVIEW_MODAL,
  };
};
const showAskModal = () => {
  return {
    type: SHOW_ASK_MODAL,
  };
};
const closeAskModal = () => {
  return {
    type: CLOSE_ASK_MODAL,
  };
};
const showProModal = () => {
  return { type: SHOW_PRO_MODAL };
};
const closeProModal = () => {
  return { type: CLOSE_PRO_MODAL };
};
const showCorrectModal = () => {
  return { type: SHOW_CORRECT_MODAL };
};
const closeCorrectModal = () => {
  return { type: CLOSE_CORRECT_MODAL };
};
const showWrongModal = () => {
  return { type: SHOW_WRONG_MODAL };
};
const closeWrongModal = () => {
  return { type: CLOSE_WRONG_MODAL };
};
const closeStopModal = () => {
  return { type: CLOSE_STOP_PLAY_MODAL };
};
const showStopPlayModal = () => {
  return { type: SHOW_STOP_PLAY_MODAL };
};
const showClickStopPlayModal = () => {
  return { type: SHOW_CLICK_STOP_MODAL };
};
const closeClickStopPlayModal = () => {
  return { type: CLOSE_CLICK_STOP_MODAL };
};

export {
  showAskModal,
  closeAskModal,
  showReviewModal,
  closeReviewModal,
  showProModal,
  closeProModal,
  showCorrectModal,
  closeCorrectModal,
  showWrongModal,
  closeWrongModal,
  showStopPlayModal,
  closeStopModal,
  showClickStopPlayModal,
  closeClickStopPlayModal,
};
