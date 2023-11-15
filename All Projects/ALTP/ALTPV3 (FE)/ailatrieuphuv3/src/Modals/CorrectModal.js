import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { buttonStyle1, imgButtonStyle1, modalBodyImgStyle } from "../Styles";
import { closeCorrectModal } from "../Redux/Actions/Show_Hide_ModalActions";
import { setQNumber } from "../Redux/Actions/Q_NumberActions";
import { corrects } from "../DefaulParams";
import {
  show5050Ac,
  showAskAc,
  showGGAc,
  showReviewAc,
} from "../Redux/Actions/Show_Hide_Button";
function CorrectModal(props) {
  let reduxState = useSelector((state) => state);
  let qNumber = reduxState.qNumber;
  let dispatchRedux = useDispatch();
  const exit = (qNumber) => {
    dispatchRedux(closeCorrectModal());
    if (qNumber < 15) {
      dispatchRedux(setQNumber(qNumber + 1));
    } else {
      dispatchRedux(setQNumber(1));
      dispatchRedux(show5050Ac());
      dispatchRedux(showAskAc());
      dispatchRedux(showGGAc());
      dispatchRedux(showReviewAc());
    }
  };
  let number = Math.floor(Math.random() * 16) + 1;
  let src = (number, qNumber) => {
    if (qNumber < 15) {
      return `/imgs/correctImg${number}.gif`;
    } else {
      return `/imgs/correctImg17.gif`;
    }
  };
  return (
    <Modal fade={false} isOpen={reduxState.showCorrectModal}>
      <ModalHeader>
        <h1>{corrects[qNumber - 1]}</h1>
      </ModalHeader>
      <ModalBody>
        <img
          style={modalBodyImgStyle}
          src={src(number, qNumber)}
          alt="CorrectImg"
        ></img>
      </ModalBody>
      <ModalFooter>
        {" "}
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
