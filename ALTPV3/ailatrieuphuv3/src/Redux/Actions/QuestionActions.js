import { getQuestionsByNumberAPI } from "../../API/QuestionAPI";
import { GET_RANDOM_QUESTION } from "../Contants/ActionsType";

const getRandomQuestionByNumberRedux = (question) => {
  return {
    type: GET_RANDOM_QUESTION,
    payload: question,
  };
};
const getRandomQuestionByNumber = (qNumber) => {
  return (dispatch) => {
    return getQuestionsByNumberAPI(qNumber).then((res) => {
      let questions = res;
      let index = Math.floor(Math.random() * questions.length);

      dispatch(getRandomQuestionByNumberRedux(questions[index]));
    });
  };
};
export { getRandomQuestionByNumber, getRandomQuestionByNumberRedux };
