import React from "react";
import AddQuestionButton from "./AddQuestionButton";
import FomFindQuestionsByNumber from "./FomFindQuestionsByNumber";
import FormFindById from "./FormFindById";
import { toolBarStyle } from "../../../CSS/Styles";

function ToolsBar(props) {
  let { setShowCreateModal } = props;
  return (
    <div style={toolBarStyle} class="row">
      <AddQuestionButton setShowCreateModal={setShowCreateModal} />{" "}
      <FormFindById />
      <FomFindQuestionsByNumber />
    </div>
  );
}

export default ToolsBar;
