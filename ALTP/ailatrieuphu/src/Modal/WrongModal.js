import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {
  buttonStyle1,
  imgButtonStyle1,
  modalBodyImgStyle,
} from "../CSS/Styles";
import { wrongImgSmile } from "../API/DefaulParams";

function WrongModal(props) {
  let {
    showWrongModal,
    setShowWrongModal,
    setHideBotMiddle,
    correctAnswer,
    setQNumber,
    wrongReward,
    wrongImg,
    setHideRightPart,
  } = props;
  let exit = () => {
    setShowWrongModal(false);
    setHideBotMiddle(true);
    setHideRightPart(true);
    setQNumber(1);
  };
  return (
    <Modal fade={false} isOpen={showWrongModal}>
      <ModalHeader>
        <h1>
          <b style={{ color: "red" }}>{correctAnswer}</b> là đáp án đúng
        </h1>
        <br></br>
        <h2>{wrongReward}</h2>
      </ModalHeader>
      <ModalBody>
        <img style={modalBodyImgStyle} src={wrongImg} alt="Wrong"></img>
      </ModalBody>
      <ModalFooter>
        {wrongImgSmile}
        <Button onClick={exit} style={buttonStyle1}>
          <img src="/imgs/Escape.png" alt="Exit" style={imgButtonStyle1} />
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default WrongModal;
