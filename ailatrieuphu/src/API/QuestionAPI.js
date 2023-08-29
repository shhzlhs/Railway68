import { api } from "./api";
const getQuestionsAPI = () => {
  return api("GET", "questions/", null);
};
const getQuestionByIdAPI = (id) => {
  return api("GET", `questions/id/${id}`, null);
};
const getQuestionsByNumberAPI = (number) => {
  let url = "questions/" + number;
  return api("GET", { url }, null);
};
const addQuestionAPI = (question) => {
  return api("POST", "questions/", question);
};
const deleteQuestionAPI = (question) => {
  let url = "questions/" + question.id;
  return api("DELETE", url, null);
};
export {
  getQuestionsAPI,
  getQuestionsByNumberAPI,
  addQuestionAPI,
  deleteQuestionAPI,
  getQuestionByIdAPI,
};
