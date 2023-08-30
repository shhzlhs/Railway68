import React, { useState } from "react";
import AddQuestionButton from "./AddQuestionButton";
import FomFindQuestionsByNumber from "./FomFindQuestionsByNumber";
import FormFindById from "./FormFindById";
import { toolBarStyle } from "../../../CSS/Styles";
import QAInfo from "./QAInfo";
import QuestionsByNumber from "./QuestionsByNumber";

function ToolsBar(props) {
  let {
    setShowCreateModal,
    findQuestionById,
    setQuestionFindById,
    questionFindById,
    questionsFindByNumber,
    findQuestionsByNumber,
  } = props;
  let [showQAInfoModal, setShowQAInfoModal] = useState(false);
  let [showQuestionsByNumber, setShowQuestionsByNumber] = useState(false);
  return (
    <div style={toolBarStyle} class="row">
      <AddQuestionButton setShowCreateModal={setShowCreateModal} />{" "}
      <FormFindById
        findQuestionById={findQuestionById}
        setShowQAInfoModal={setShowQAInfoModal}
        setQuestionFindById={setQuestionFindById}
      />
      <FomFindQuestionsByNumber
        findQuestionsByNumber={findQuestionsByNumber}
        setShowQuestionsByNumber={setShowQuestionsByNumber}
      />
      <QAInfo
        showQAInfoModal={showQAInfoModal}
        setShowQAInfoModal={setShowQAInfoModal}
        questionFindById={questionFindById}
      />
      <QuestionsByNumber
        setShowQAInfoModal={setShowQAInfoModal}
        showQuestionsByNumber={showQuestionsByNumber}
        setShowQuestionsByNumber={setShowQuestionsByNumber}
        setQuestionFindById={setQuestionFindById}
        questionsFindByNumber={questionsFindByNumber}
      />
    </div>
  );
}

export default ToolsBar;
