import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { rewards } from "../DefaulParams";
import { buttonStyle1, imgButtonStyle1, modalBodyImgStyle } from "../Styles";
import { closeStopModal } from "../Redux/Actions/Show_Hide_ModalActions";
import { setQNumber } from "../Redux/Actions/Q_NumberActions";
import {
  show5050Ac,
  showAskAc,
  showGGAc,
  showReviewAc,
} from "../Redux/Actions/Show_Hide_Button";
import { getRandomQuestionByNumber } from "../Redux/Actions/QuestionActions";
function StopPlayeModal(props) {
  let reduxState = useSelector((state) => state);
  let dispatchRedux = useDispatch();
  const reward = (qNumber) => {
    return rewards[qNumber - 1];
  };
  const exit = () => {
    dispatchRedux(setQNumber(1));
    dispatchRedux(closeStopModal());
    dispatchRedux(show5050Ac());
    dispatchRedux(showAskAc());
    dispatchRedux(showReviewAc());
    dispatchRedux(showGGAc());
    if (reduxState.qNumber === 1) {
      dispatchRedux(getRandomQuestionByNumber(reduxState.qNumber));
    }
  };
  const src = (qNumber) => {
    return `imgs/stop${qNumber}.jpg`;
  };
  return (
    <Modal fade={false} isOpen={reduxState.showStopPlayModal}>
      <ModalHeader>
        <h1>{reward(reduxState.qNumber)}</h1>
      </ModalHeader>
      <ModalBody>
        <img
          style={modalBodyImgStyle}
          src={src(reduxState.qNumber)}
          alt="Reward"
        ></img>
      </ModalBody>
      <ModalFooter>
        <Button onClick={exit} style={buttonStyle1}>
          <img src="/imgs/Escape.png" alt="Exit" style={imgButtonStyle1} />
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default StopPlayeModal;
