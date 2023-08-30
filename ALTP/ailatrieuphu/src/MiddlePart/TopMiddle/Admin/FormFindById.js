import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import {
  buttonStyle1,
  imgButtonStyle1,
  toolBarItemStyle,
} from "../../../CSS/Styles";

function FormFindById(props) {
  let { findQuestionById, setShowQAInfoModal } = props;
  let [qId, setQId] = useState("");
  const handleFind = () => {
    findQuestionById(qId);
    setShowQAInfoModal(true);
  };
  return (
    <div
      style={toolBarItemStyle}
      className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
    >
      <Form>
        <FormGroup>
          <Input
            type="number"
            min="1"
            placeholder="Q_ID"
            value={qId}
            onChange={(event) => {
              setQId(event.target.value);
            }}
          ></Input>{" "}
          <Button onClick={handleFind} style={buttonStyle1}>
            <img style={imgButtonStyle1} src="/imgs/Find.png" alt="Find"></img>
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default FormFindById;
