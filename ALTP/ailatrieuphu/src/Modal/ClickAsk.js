import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { buttonStyle2, imgButtonStyle2 } from "../CSS/Styles";

function ClickAsk({ showClickAsk, setShowAskModal, setAskImg, setAskState }) {
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

  const ask = (src, number) => {
    setShowAskModal(true);
    setAskImg(src);
    switch (number) {
      case 1:
        setAskState("Tớ nghĩ ");
        break;
      case 2:
        setAskState("Lão Tôn nghĩ ");
        break;
      case 3:
        setAskState("Tôi chắc chắn ");
        break;
      case 5:
        setAskState("Ta nghĩ ");
        break;
      case 10:
        setAskState("Em nghĩ ");
        break;
      case 11:
        setAskState("Quạc quạc...quạc... ");
        break;
      case 13:
        setAskState("Ta nghĩ ");
        break;
      case 15:
        setAskState("Ta đã nhìn ra  ");
        break;
      case 16:
        setAskState("Ta nghĩ  ");
        break;
      case 19:
        setAskState("Ta nghĩ  ");
        break;
      case 20:
        setAskState("Thần lực cho ta biết ");
        break;
      case 21:
        setAskState("Manh mối cho thấy ");
        break;
      case 22:
        setAskState("Ta tiên đoán ");
        break;
      default:
        setAskState("Tôi nghĩ ");
        break;
    }
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
                onClick={() => ask(`/imgs/pro${number}.jpg`, number)}
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
