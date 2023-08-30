import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {
  buttonStyle1,
  imgButtonStyle1,
  modalBodyImgStyle,
} from "../CSS/Styles";
import { happyImg } from "../API/DefaulParams";

function CorrectModal(props) {
  let {
    showCorrectModal,
    setShowCorrectModal,
    correct,
    correctImg,
    qNumber,
    setQNumber,
    setHideBotMiddle,
    setHideRightPart,
  } = props;
  let exit = (number) => {
    if (qNumber === 15) {
      setQNumber(1);
      setHideBotMiddle(true);
      setHideRightPart(true);
    }
    if (qNumber < 15) {
      setQNumber(qNumber + 1);
    }
    setShowCorrectModal(false);
  };
  return (
    <Modal fade={false} isOpen={showCorrectModal}>
      <ModalHeader>
        <h1>
          <b style={{ color: "red" }}>{correct}</b>
        </h1>
      </ModalHeader>
      <ModalBody>
        <img style={modalBodyImgStyle} src={correctImg} alt="CorrectImg"></img>
      </ModalBody>
      <ModalFooter>
        {happyImg}
        <Button
          onClick={() => {
            exit(qNumber);
          }}
          style={buttonStyle1}
        >
          <img src="/imgs/Play1.png" alt="Exit" style={imgButtonStyle1} />
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default CorrectModal;
