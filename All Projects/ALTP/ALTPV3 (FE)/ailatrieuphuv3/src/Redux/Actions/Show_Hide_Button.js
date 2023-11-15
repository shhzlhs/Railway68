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

const hide5050Ac = () => {
  return {
    type: HIDE_5050,
  };
};
const show5050Ac = () => {
  return {
    type: SHOW_5050,
  };
};
const hideGGAc = () => {
  return {
    type: HIDE_GG,
  };
};
const showGGAc = () => {
  return {
    type: SHOW_GG,
  };
};
const hideAskAc = () => {
  return {
    type: HIDE_ASK,
  };
};
const showAskAc = () => {
  return {
    type: SHOW_ASK,
  };
};
const hideReviewAc = () => {
  return {
    type: HIDE_REVIEW,
  };
};
const showReviewAc = () => {
  return {
    type: SHOW_REVIEW,
  };
};
export {
  hide5050Ac,
  show5050Ac,
  hideAskAc,
  showAskAc,
  hideGGAc,
  showGGAc,
  hideReviewAc,
  showReviewAc,
};
