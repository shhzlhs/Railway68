import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {
  buttonStyle1,
  imgButtonStyle1,
  modalBodyImgStyle,
} from "../CSS/Styles";

function ChangeQuestionModal(props) {
  let { showChangeModal, setShowChangeModal } = props;
  return (
    <Modal fade={false} isOpen={showChangeModal}>
      <ModalHeader>
        <h1>Bạn nghĩ câu hỏi khác sẽ dễ hơn sao?</h1>
      </ModalHeader>
      <ModalBody>
        <img style={modalBodyImgStyle} alt="Change" src="/imgs/Re.gif"></img>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            setShowChangeModal(false);
          }}
          style={buttonStyle1}
        >
          <img style={imgButtonStyle1} alt="close" src="/imgs/Play1.png"></img>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ChangeQuestionModal;
