import React from "react";
import { Modal, ModalFooter, ModalHeader, Button } from "reactstrap";
import { buttonStyle1, imgButtonStyle1, imgButtonStyle3 } from "../CSS/Styles";

function AskModal(props) {
  let {
    showAskModal,
    setShowAskModal,
    randomAnswerAsk,
    setShowClickAsk,
    askImg,
  } = props;
  let x = { content: "NA" };
  let answer = randomAnswerAsk || x; // Sử dụng toán tử "hoặc" để gán giá trị mặc định
  let close = () => {
    setShowAskModal(false);
    setShowClickAsk(false);
  };
  return (
    <Modal fade={false} isOpen={showAskModal}>
      <ModalHeader>
        <img alt="Professor" src={askImg} style={imgButtonStyle3}></img>
        <h1>
          Tôi nghĩ <b style={{ color: "red" }}> {answer.content}</b> là đáp án
          đúng!
        </h1>
      </ModalHeader>
      <ModalFooter>
        <Button onClick={close} style={buttonStyle1}>
          <img style={imgButtonStyle1} src="/imgs/Play1.png" alt="Close"></img>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default AskModal;
