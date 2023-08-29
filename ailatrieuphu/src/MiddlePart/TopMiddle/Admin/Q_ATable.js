import React from "react";
import QuestionTable from "./QuestionTable";
import { qAStyle } from "../../../CSS/Styles";
import AnswerTable from "./AnswerTable";

function Q_ATable(props) {
  let { questions, answers } = props;
  return (
    <div style={qAStyle} className="row">
      <QuestionTable questions={questions} />
      <AnswerTable answers={answers} />
    </div>
  );
}

export default Q_ATable;
