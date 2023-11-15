import React from "react";
import { Button } from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../Styles";
import { useSelector, useDispatch } from "react-redux";
import { getRandomQuestionByNumber } from "../Redux/Actions/QuestionActions";
import { setQNumber } from "../Redux/Actions/Q_NumberActions";
import {
  show5050Ac,
  showAskAc,
  showGGAc,
  showReviewAc,
} from "../Redux/Actions/Show_Hide_Button";
function RePlayButton(props) {
  let dispatchRedux = useDispatch();
  let qNumber = useSelector((state) => state.qNumber);

  let onReplay = () => {
    if (qNumber === 1) {
      dispatchRedux(getRandomQuestionByNumber(1));
    } else {
      dispatchRedux(setQNumber(1));
    }
    dispatchRedux(show5050Ac());
    dispatchRedux(showReviewAc());
    dispatchRedux(showAskAc());
    dispatchRedux(showGGAc());
  };
  return (
    <Button onClick={onReplay} style={buttonStyle1}>
      <img
        style={imgButtonStyle1}
        src="/imgs/Re.png"
        alt="Refresh
            "
      ></img>
    </Button>
  );
}

export default RePlayButton;
