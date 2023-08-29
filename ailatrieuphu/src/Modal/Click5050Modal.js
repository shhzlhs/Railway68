import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../CSS/Styles";

function Click5050Modal(props) {
  let { show5050, setShow5050, falseAnswers } = props;
  let x1 = { content: "NA" };
  let x2 = { content: "NA" };
  let answer1 = falseAnswers && falseAnswers.length >= 1 ? falseAnswers[0] : x1;
  let answer2 = falseAnswers && falseAnswers.length >= 2 ? falseAnswers[1] : x2;
  let close = () => {
    setShow5050(false);
  };
  return (
    <Modal fade={false} isOpen={show5050}>
      <ModalHeader>
        <h1>2 đáp án sai là:</h1>
      </ModalHeader>
      <ModalBody>
        <h1 style={{ color: "red" }}>
          <b>
            {answer1.content};<br></br>
            <br></br>
            {answer2.content}
          </b>
        </h1>
      </ModalBody>
      <ModalFooter>
        <Button onClick={close} style={buttonStyle1}>
          <img src="/imgs/Play1.png" alt="Close" style={imgButtonStyle1} />
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default Click5050Modal;
