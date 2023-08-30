import React, { useEffect, useState } from "react";
import {
  addQuestionAPI,
  deleteQuestionAPI,
  getQuestionByIdAPI,
  getQuestionsAPI,
  getQuestionsByNumberAPI,
} from "../../API/QuestionAPI";
import { getAnswersAPI } from "../../API/AnswerAPI";
import ToolsBar from "./Admin/ToolsBar";
import { adminStyle } from "../../CSS/Styles";
import Q_ATable from "./Admin/Q_ATable";
import CreateModal from "./Admin/CreateModal";
import { defaulQuestionFindById } from "../../API/DefaulParams";

function Admin(props) {
  let [questions, setQuestions] = useState([defaulQuestionFindById]);
  let [answers, setAnswers] = useState([]);
  let [questionsFindByNumber, setQuestionsFindByNumber] = useState([
    defaulQuestionFindById,
  ]);
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
      console.log("QSSS:", questionsFindByNumber);
    });
  };
  let findQuestionById = (qId) => {
    getQuestionByIdAPI(qId).then((response) => {
      if (response) {
        setQuestionFindById(response);
      } else {
        setQuestionFindById(defaulQuestionFindById);
      }
    });
  };
  let deleteQuestions = (ids) => {
    deleteQuestionAPI(ids).then((response) => {
      console.log(response);
      getAllQuestions();
      getAllAnswers();
    });
  };
  useEffect(() => {
    getAllQuestions();
    getAllAnswers();
  }, []);
  return (
    <div style={adminStyle} className="row">
      <ToolsBar
        questionsFindByNumber={questionsFindByNumber}
        findQuestionsByNumber={findQuestionsByNumber}
        setQuestionFindById={setQuestionFindById}
        questionFindById={questionFindById}
        setShowCreateModal={setShowCreateModal}
        findQuestionById={findQuestionById}
      />
      <Q_ATable
        questions={questions}
        answers={answers}
        deleteQuestions={deleteQuestions}
      />
      <CreateModal
        showCreateModal={showCreateModal}
        setShowCreateModal={setShowCreateModal}
        createQuestion={createQuestion}
      />
    </div>
  );
}

export default Admin;
