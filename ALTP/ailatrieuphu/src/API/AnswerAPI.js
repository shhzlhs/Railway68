import { api } from "./api";
const getAnswersAPI = () => {
  return api("GET", "answers/", null);
};

const getAnswersByQuestionIdAPI = (questionId) => {
  return api("GET", `answers/${questionId}`, null);
};
const addAnswerAPI = (answer) => {
  return api("POST", "answers/", answer);
};
const deleteAnswerAPI = (answer) => {
  let url = "answers/" + answer.id;
  return api("DELETE", url, null);
};
export {
  getAnswersAPI,
  getAnswersByQuestionIdAPI,
  addAnswerAPI,
  deleteAnswerAPI,
};
