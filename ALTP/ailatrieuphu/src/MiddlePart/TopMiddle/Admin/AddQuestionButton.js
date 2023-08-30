import React from "react";
import { Button } from "reactstrap";
import {
  buttonStyle1,
  imgButtonStyle1,
  toolBarItemStyle,
} from "../../../CSS/Styles";

function AddQuestionButton(props) {
  let { setShowCreateModal } = props;
  return (
    <div
      style={toolBarItemStyle}
      className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
    >
      <Button onClick={() => setShowCreateModal(true)} style={buttonStyle1}>
        <img style={imgButtonStyle1} src="imgs/add.png" alt="Add"></img>
      </Button>
    </div>
  );
}

export default AddQuestionButton;
