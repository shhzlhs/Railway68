import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { buttonStyle1, imgButtonStyle1, modalBodyImgStyle } from "../Styles";
import {
  closeClickStopPlayModal,
  showStopPlayModal,
} from "../Redux/Actions/Show_Hide_ModalActions";
function ClickStopPlayModal(props) {
  let reduxState = useSelector((state) => state);
  let dispatchRedux = useDispatch();

  return (
    <Modal fade={false} isOpen={reduxState.showClickStopModal}>
      <ModalHeader>
        <h1 style={{ color: "red" }}>Bạn chắc chắn muốn dừng cuộc chơi?</h1>
      </ModalHeader>
      <ModalBody>
        <img style={modalBodyImgStyle} src="/imgs/đểu.gif" alt="YesOrNo?"></img>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            dispatchRedux(showStopPlayModal());
            dispatchRedux(closeClickStopPlayModal());
          }}
          style={buttonStyle1}
        >
          <img style={imgButtonStyle1} src="/imgs/Yes.png" alt="YES"></img>
        </Button>
        <Button
          onClick={() => {
            dispatchRedux(closeClickStopPlayModal());
          }}
          style={buttonStyle1}
        >
          <img style={imgButtonStyle1} src="/imgs/No.png" alt="NO"></img>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ClickStopPlayModal;
