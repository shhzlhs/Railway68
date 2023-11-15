import { SET_ANSWERS } from "../Contants/ActionsType";

const setAnswers = (answers) => {
  return {
    type: SET_ANSWERS,
    payload: answers,
  };
};

export { setAnswers };
