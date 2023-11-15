import React from "react";
import { Button } from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../Styles";
import { useSelector, useDispatch } from "react-redux";
import { setAnswers } from "../Redux/Actions/AnswerAction";
import { hide5050Ac } from "../Redux/Actions/Show_Hide_Button";
function H_50_50_Button(props) {
  let dispatchRedux = useDispatch();
  let reduxState = useSelector((state) => state);
  let answers = reduxState.answers;
  let hide5050 = reduxState.hide5050;
  const on5050 = () => {
    const falseAnswerIndexes = [];
    answers.forEach((answer, index) => {
      if (answer.isTrue === "N") {
        falseAnswerIndexes.push(index);
      }
    });
    const randomNumbers = [];
    while (randomNumbers.length < 2) {
      const randomNumber = Math.floor(Math.random() * 3);
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    let updatedAnswers = [...answers];
    randomNumbers.forEach((randomNumber) => {
      updatedAnswers[falseAnswerIndexes[randomNumber]].content = null;
      updatedAnswers[falseAnswerIndexes[randomNumber]].isTrue = "NA";
    });
    dispatchRedux(setAnswers(updatedAnswers));
    dispatchRedux(hide5050Ac());
  };

  return (
    <Button hidden={hide5050} onClick={on5050} style={buttonStyle1}>
      <img style={imgButtonStyle1} src="/imgs/5050.png" alt="5050"></img>
    </Button>
  );
}

export default H_50_50_Button;
