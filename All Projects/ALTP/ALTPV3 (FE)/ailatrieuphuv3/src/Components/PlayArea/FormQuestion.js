import React from "react";
import { formQuestionAnswerStyle } from "../../Styles";
import QuestionBar from "./QuestionBar";
import { Container } from "reactstrap";
import Ansers from "./Ansers";
import ReviewModal from "../../Modals/ReviewModal";
import ClickAsk from "../../Modals/ClickAsk";
import ProModal from "../../Modals/ProModal";
import CorrectModal from "../../Modals/CorrectModal";
import WrongModal from "../../Modals/WrongModal";
import ClickStopPlayModal from "../../Modals/ClickStopPlayModal";
import StopPlayeModal from "../../Modals/StopPlayeModal";

function FormQuestion(props) {
  return (
    <Container style={formQuestionAnswerStyle}>
      <QuestionBar />
      <Ansers />
      <ReviewModal />
      <ClickAsk />
      <ProModal />
      <CorrectModal />
      <WrongModal />
      <ClickStopPlayModal />
      <StopPlayeModal />
    </Container>
  );
}

export default FormQuestion;
