import React from "react";
import { Modal, ModalFooter, ModalHeader, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  buttonStyle1,
  imgButtonStyle1,
  imgButtonStyle3,
  midBarDiv,
  proStyle,
} from "../Styles";
import { closeProModal } from "../Redux/Actions/Show_Hide_ModalActions";
import { states } from "../DefaulParams";
function ProModal(props) {
  let reduxState = useSelector((state) => state);
  let dispatchRedux = useDispatch();
  let answers = reduxState.answers;
  let nulls = answers.filter((answer) => answer.comtent !== null);
  let qNumber = reduxState.qNumber;
  let askState = reduxState.askState;
  const randomAnswer = () => {
    let probability;
    if (nulls.length === 0) {
      if (qNumber < 8) {
        probability = 0.9;
      } else if (qNumber < 10) {
        probability = 0.7;
      } else if (qNumber < 12) {
        probability = 0.6;
      } else {
        probability = 0.5;
      }
    } else {
      if (qNumber < 8) {
        probability = 1;
      } else if (qNumber < 10) {
        probability = 0.8;
      } else if (qNumber < 12) {
        probability = 0.7;
      } else {
        probability = 0.6;
      }
    }

    return selectAnswerWithProbability(answers || [], probability);
  };

  const selectAnswerWithProbability = (answers, probability) => {
    const trueAnswerIndex = answers.findIndex(
      (answer) => answer.isTrue === "Y"
    );

    if (trueAnswerIndex === -1) {
      return null;
    }

    const randomValue = Math.random();

    return randomValue < probability
      ? answers[trueAnswerIndex]
      : getRandomAnswer(answers, trueAnswerIndex);
  };

  const getRandomAnswer = (answers, trueAnswerIndex) => {
    const falseAnswers = answers.filter(
      (answer, index) => index !== trueAnswerIndex && answer.content !== null
    );
    const randomIndex = Math.floor(Math.random() * falseAnswers.length);
    return falseAnswers[randomIndex];
  };

  const ABCD = ["A", "B", "C", "D"];
  const items = askState.map((state) => {
    const randomAnswerAsk = randomAnswer();
    const index = answers.findIndex(
      (answer) => answer.content === randomAnswerAsk.content
    );
    const src = `/imgs/pro${state}.jpg`;
    return (
      <div style={proStyle} className="row">
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <img alt="Professor" src={src} style={imgButtonStyle3}></img>
        </div>
        <div style={midBarDiv} class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
          <h1>
            {states[state - 1]}
            <br></br> <b style={{ color: "red" }}>{ABCD[index]}</b> là đáp án
            đúng!
          </h1>
        </div>
      </div>
    );
  });
  return (
    <Modal fade={false} isOpen={reduxState.showProModal}>
      <ModalHeader>{items}</ModalHeader>
      <ModalFooter>
        <Button
          onClick={() => dispatchRedux(closeProModal())}
          style={buttonStyle1}
        >
          <img style={imgButtonStyle1} src="/imgs/Play1.png" alt="Close"></img>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ProModal;
