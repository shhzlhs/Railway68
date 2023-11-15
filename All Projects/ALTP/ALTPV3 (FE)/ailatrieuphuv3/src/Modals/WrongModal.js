import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { closeWrongModal } from "../Redux/Actions/Show_Hide_ModalActions";
import { setQNumber } from "../Redux/Actions/Q_NumberActions";
import { wrongReward1, wrongReward2, wrongReward3 } from "../DefaulParams";
import { buttonStyle1, imgButtonStyle1, modalBodyImgStyle } from "../Styles";
import { getRandomQuestionByNumber } from "../Redux/Actions/QuestionActions";
import {
  show5050Ac,
  showAskAc,
  showGGAc,
  showReviewAc,
} from "../Redux/Actions/Show_Hide_Button";
function WrongModal(props) {
  let reduxState = useSelector((state) => state);
  let dispatchRedux = useDispatch();
  const exit = () => {
    dispatchRedux(closeWrongModal());
    dispatchRedux(setQNumber(1));
    if (reduxState.qNumber === 1) {
      dispatchRedux(getRandomQuestionByNumber(1));
    }
    dispatchRedux(show5050Ac());
    dispatchRedux(showAskAc());
    dispatchRedux(showGGAc());
    dispatchRedux(showReviewAc());
  };
  const wrongReward = (qNumber) => {
    if (qNumber < 6) {
      return wrongReward1;
    } else if (qNumber < 11) {
      return wrongReward2;
    } else {
      return wrongReward3;
    }
  };
  const src = (qNumber) => {
    if (qNumber < 6) {
      return `imgs/wrongImg1.jpg`;
    } else if (qNumber < 11) {
      return `imgs/wrongImg2.jpg`;
    } else {
      return `imgs/wrongImg3.jpg`;
    }
  };
  return (
    <Modal fade={false} isOpen={reduxState.showWrongModal}>
      <ModalHeader>
        <h2>{wrongReward(reduxState.qNumber)}</h2>
      </ModalHeader>
      <ModalBody>
        <img
          src={src(reduxState.qNumber)}
          style={modalBodyImgStyle}
          alt="Wrong"
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

export default WrongModal;
