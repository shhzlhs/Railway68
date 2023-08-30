import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import {
  buttonStyle1,
  imgButtonStyle1,
  toolBarItemStyle,
} from "../../../CSS/Styles";

function FomFindQuestionsByNumber(props) {
  let { setShowQuestionsByNumber, findQuestionsByNumber } = props;
  let [qNumber, setQNumber] = useState("");
  const handleFind = () => {
    findQuestionsByNumber(qNumber);
    setShowQuestionsByNumber(true);
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
            max="15"
            placeholder="Q_Number"
            value={qNumber}
            onChange={(event) => {
              setQNumber(event.target.value);
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

export default FomFindQuestionsByNumber;
