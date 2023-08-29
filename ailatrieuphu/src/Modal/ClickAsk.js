import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { buttonStyle2, imgButtonStyle2 } from "../CSS/Styles";

function ClickAsk({ showClickAsk, setShowAskModal, setAskImg }) {
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

  const ask = (src) => {
    setShowAskModal(true);
    setAskImg(src);
  };

  return (
    <Modal fade={false} isOpen={showClickAsk}>
      <ModalHeader>
        <h1>Bạn muốn hỏi ai?</h1>
      </ModalHeader>
      <ModalBody>
        <div className="row">
          {randomNumbers.map((number) => (
            <div key={number} className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <Button
                onClick={() => ask(`/imgs/pro${number}.jpg`)}
                style={buttonStyle2}
              >
                <img
                  alt="Professor"
                  src={`/imgs/pro${number}.jpg`}
                  style={imgButtonStyle2}
                />
              </Button>
            </div>
          ))}
        </div>
      </ModalBody>
    </Modal>
  );
}

export default ClickAsk;
