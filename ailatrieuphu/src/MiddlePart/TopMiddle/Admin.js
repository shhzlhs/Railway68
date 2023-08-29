import React, { useEffect, useState } from "react";
import {
  addQuestionAPI,
  getQuestionByIdAPI,
  getQuestionsAPI,
  getQuestionsByNumberAPI,
} from "../../API/QuestionAPI";
import { getAnswersAPI } from "../../API/AnswerAPI";
import ToolsBar from "./Admin/ToolsBar";
import { adminStyle } from "../../CSS/Styles";
import Q_ATable from "./Admin/Q_ATable";
import CreateModal from "./Admin/CreateModal";

function Admin(props) {
  const defaulQuestionFindById = {
    id: "0",
    content: "Không có câu hỏi này",
    answers: [],
  };
  let [questions, setQuestions] = useState([defaulQuestionFindById]);
  let [answers, setAnswers] = useState([]);
  let [questionsFindByNumber, setQuestionsFindByNumber] = useState([]);
  let [questionFindById, setQuestionFindById] = useState(
    defaulQuestionFindById
  );
  let [showCreateModal, setShowCreateModal] = useState(false);
  let getAllQuestions = () => {
    getQuestionsAPI().then((response) => {
      setQuestions(response);
    });
  };
  let getAllAnswers = () => {
    getAnswersAPI().then((response) => {
      setAnswers(response);
    });
  };
  let createQuestion = (newQuestion) => {
    addQuestionAPI(newQuestion).then((response) => {
      console.log("respone:" + response);
      getAllAnswers();
      getAllQuestions();
    });
  };
  let findQuestionsByNumber = (qNumber) => {
    getQuestionsByNumberAPI(qNumber).then((response) => {
      setQuestionsFindByNumber(response);
    });
  };
  let findQuestionById = (qId) => {
    getQuestionByIdAPI(qId).then((response) => {
      setQuestionFindById(response);
    });
  };
  useEffect(() => {
    getAllQuestions();
    getAllAnswers();
  }, []);
  return (
    <div style={adminStyle} className="row">
      <ToolsBar setShowCreateModal={setShowCreateModal} />
      <Q_ATable questions={questions} answers={answers} />
      <CreateModal
        showCreateModal={showCreateModal}
        setShowCreateModal={setShowCreateModal}
        createQuestion={createQuestion}
      />
    </div>
  );
}

export default Admin;
