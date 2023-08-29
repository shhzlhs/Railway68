import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {
  buttonStyle1,
  imgButtonStyle1,
  modalBodyImgStyle,
} from "../CSS/Styles";
import { wrongImgSmile } from "../API/DefaulParams";

function StopPlayModal(props) {
  let {
    showStopPlayModal,
    setShowStopPlayModal,
    setHideBotMiddle,
    reward,
    stop,
  } = props;
  let src = "/imgs/" + stop + ".jpg";
  let exit = () => {
    setShowStopPlayModal(false);
    setHideBotMiddle(true);
  };
  return (
    <Modal fade={false} isOpen={showStopPlayModal}>
      <ModalHeader>
        <h1>{reward}</h1>
      </ModalHeader>
      <ModalBody>
        <img style={modalBodyImgStyle} src={src} alt="Reward"></img>
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

export default StopPlayModal;
