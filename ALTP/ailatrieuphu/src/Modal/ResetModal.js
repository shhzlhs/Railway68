import React from "react";
import { Button, Modal, ModalFooter, ModalHeader } from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../CSS/Styles";
import Welcome from "../MiddlePart/TopMiddle/Welcome";

function ResetModal(props) {
  let {
    showResetModal,
    setShowResetModal,
    setQNumber,
    setHideBotMiddle,
    setHide5050,
    setHideReview,
    setHideGG,
    setHideAsk,
    setTopMiddleBody,
    setHideRightPart,
  } = props;
  let yesss = () => {
    setQNumber(1);
    setShowResetModal(false);
    setHideBotMiddle(false);
    setHide5050(false);
    setHideAsk(false);
    setHideReview(false);
    setHideGG(false);
    setHideRightPart(true);
    setTopMiddleBody(<Welcome />);
  };

  let nooo = () => {
    setShowResetModal(false);
  };
  return (
    <Modal fade={false} isOpen={showResetModal}>
      <ModalHeader>
        <h1 style={{ color: "red" }}>Bạn có muốn chơi lại từ đầu?</h1>
      </ModalHeader>
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

export default ResetModal;
