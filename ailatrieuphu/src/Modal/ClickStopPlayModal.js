import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {
  buttonStyle1,
  imgButtonStyle1,
  modalBodyImgStyle,
} from "../CSS/Styles";
import { rewards } from "../API/DefaulParams";
function ClickStopPlayModal(props) {
  let {
    showClickStopModal,
    setShowClickStopModal,
    setShowStopPlayModal,
    qNumber,
    setReward,
    setStop,
  } = props;
  let nooo = () => {
    setShowClickStopModal(false);
  };
  let yesss = () => {
    setStop("stop" + qNumber);
    setReward(rewards[qNumber - 1]);
    setShowClickStopModal(false);
    setShowStopPlayModal(true);
  };
  return (
    <Modal fade={false} isOpen={showClickStopModal}>
      <ModalHeader>
        <h1 style={{ color: "red" }}>Bạn chắc chắn muốn dừng cuộc chơi?</h1>
      </ModalHeader>
      <ModalBody>
        <img style={modalBodyImgStyle} src="/imgs/đểu.gif" alt="YesOrNo?"></img>
      </ModalBody>
      <ModalFooter>
        <Button onClick={yesss} style={buttonStyle1}>
          <img style={imgButtonStyle1} src="/imgs/Yes.png" alt="YES"></img>
        </Button>
        <Button onClick={nooo} style={buttonStyle1}>
          <img style={imgButtonStyle1} src="/imgs/No.png" alt="NO"></img>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ClickStopPlayModal;
