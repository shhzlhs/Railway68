import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { buttonStyle1, imgButtonStyle1, imgButtonStyle2 } from "../Styles";
import {
  closeAskModal,
  showProModal,
} from "../Redux/Actions/Show_Hide_ModalActions";
import { setAskState } from "../Redux/Actions/ItemsActions";
function ClickAsk(props) {
  let dispatchRedux = useDispatch();
  let reduxState = useSelector((state) => state);

  let showAskModal = reduxState.showAskModal;
  const getRandomNumbers = () => {
    const selectedNumbers = [];
    while (selectedNumbers.length < 3) {
      const randomValue = Math.floor(Math.random() * 24) + 1;
      if (!selectedNumbers.includes(randomValue)) {
        selectedNumbers.push(randomValue);
      }
    }
    return selectedNumbers;
  };

  const randomNumbers = getRandomNumbers();
  const ask = (numbers) => {
    dispatchRedux(setAskState(numbers));
    dispatchRedux(showProModal());
    dispatchRedux(closeAskModal());
  };
  return (
    <Modal fade={false} isOpen={showAskModal}>
      <ModalHeader>
        <h1>Hỏi tổ chuyên gia?</h1>
      </ModalHeader>
      <ModalBody>
        <div className="row">
          {randomNumbers.map((number) => (
            <div key={number} className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <img
                alt="Professor"
                src={`/imgs/pro${number}.jpg`}
                style={imgButtonStyle2}
              />
            </div>
          ))}
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            ask(randomNumbers);
          }}
          style={buttonStyle1}
        >
          <img style={imgButtonStyle1} alt="ask" src="/imgs/Ask.png"></img>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ClickAsk;
