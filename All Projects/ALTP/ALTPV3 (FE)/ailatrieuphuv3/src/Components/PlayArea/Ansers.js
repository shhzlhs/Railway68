import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { answerSelectButton, midBarDiv } from "../../Styles";
import { Button } from "reactstrap";
import {
  showCorrectModal,
  showWrongModal,
} from "../../Redux/Actions/Show_Hide_ModalActions";

function Answers(props) {
  let dispatchRedux = useDispatch();
  let answers = useSelector((state) => state.answers);
  const selectAnswer = (answer) => {
    if (answer.isTrue === "Y") {
      dispatchRedux(showCorrectModal());
    } else if (answer.isTrue === "N") {
      dispatchRedux(showWrongModal());
    }
  };
  const answerLabels = ["A:", "B:", "C:", "D:"];

  const items = answers.map((answer, index) => (
    <div
      style={midBarDiv}
      className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
      key={index}
    >
      <Button
        onClick={() => {
          selectAnswer(answer);
        }}
        style={answerSelectButton}
      >
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <h2> {answerLabels[index]}</h2>
        </div>

        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <h2>{answer.content}</h2>
        </div>
      </Button>
    </div>
  ));

  return <div className="row">{items}</div>;
}

export default Answers;
