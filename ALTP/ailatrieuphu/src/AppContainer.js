import React, { useEffect, useState } from "react";
import VTV3 from "./LeftPart/VTV3";
import LeftPart from "./Parts/LeftPart";
import MiddlePart from "./Parts/MiddlePart";
import {
  corrects,
  defaultQuestion,
  defaultQuestions,
  wrongReward1,
  wrongReward2,
  wrongReward3,
} from "./API/DefaulParams";
import { getQuestionsByNumberAPI } from "./API/QuestionAPI";
import { Button } from "reactstrap";
import { answerSelectButton, midBarDiv } from "./CSS/Styles";
import WrongModal from "./Modal/WrongModal";
import CorrectModal from "./Modal/CorrectModal";
import ResetModal from "./Modal/ResetModal";
import ClickStopPlayModal from "./Modal/ClickStopPlayModal";
import Click5050Modal from "./Modal/Click5050Modal";
import StopPlayModal from "./Modal/StopPlayModal";
import ClickAsk from "./Modal/ClickAsk";
import AskModal from "./Modal/AskModal";
import RightPart from "./Parts/RightPart";
import Welcome from "./MiddlePart/TopMiddle/Welcome";
import ReviewModal from "./Modal/ReviewModal";

function AppContainer(props) {
  let [qNumber, setQNumber] = useState(1);
  let [questions, setQuestions] = useState(defaultQuestions);
  let [question, setQuestion] = useState({});
  let [hideBotMiddle, setHideBotMiddle] = useState(true);
  let [wrongReward, setWrongReward] = useState("");
  let [reward, setReward] = useState("");
  let [stop, setStop] = useState("");
  let [showWrongModal, setShowWrongModal] = useState(false);
  let [showCorrectModal, setShowCorrectModal] = useState(false);
  let [showResetModal, setShowResetModal] = useState(false);
  let [showClickStopModal, setShowClickStopModal] = useState(false);
  let [show5050, setShow5050] = useState(false);
  let [hide5050, setHide5050] = useState(false);
  let [hideReview, setHideReview] = useState(false);
  let [hideGG, setHideGG] = useState(false);
  let [hideAsk, setHideAsk] = useState(false);
  let [askImg, setAskImg] = useState("");
  let [askState, setAskState] = useState("");
  let [topMiddleBody, setTopMiddleBody] = useState(<Welcome />);
  let [hideRightPart, setHideRightPart] = useState(true);
  let [showStopPlayModal, setShowStopPlayModal] = useState(false);
  let [showClickAsk, setShowClickAsk] = useState(false);
  let [showAskModal, setShowAskModal] = useState(false);
  let [showReviewModal, setShowReviewModal] = useState(false);
  let [wrongImg, setWrongImg] = useState("");
  let [correctImg, setCorrectImg] = useState("");
  let [correct, setCorrect] = useState("");
  const getRandomQuestion = (questions) => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };
  const shuffleAnswers = (list) => {
    const shuffledList = [...list];
    for (let i = shuffledList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }

    return shuffledList;
  };
  const getRandomFalseAnswers = (answers, count) => {
    const falseAnswers = answers.filter((answer) => answer.isTrue === "N");
    return shuffleAnswers(falseAnswers).slice(0, count);
  };
  const selectAnswer = (answer) => {
    if (answer.isTrue === "Y") {
      setCorrect(corrects[qNumber - 1]);
      const randomImgNumber = Math.floor(Math.random() * 16) + 1;
      setCorrectImg(`imgs/correctImg${randomImgNumber}.gif`);
      setShowCorrectModal(true);
    } else {
      if (qNumber < 6) {
        setWrongReward(wrongReward1);
        setWrongImg("/imgs/wrongImg1.jpg");
      } else if (qNumber < 11) {
        setWrongReward(wrongReward2);
        setWrongImg("/imgs/wrongImg2.jpg");
      } else {
        setWrongReward(wrongReward3);
        setWrongImg("/imgs/wrongImg3.jpg");
      }
      setShowWrongModal(true);
    }
  };

  useEffect(() => {
    getQuestionsByNumberAPI(qNumber).then((response) => {
      setQuestions(response);
      setQuestion(getRandomQuestion(response));
    });
  }, [qNumber]);
  const etcAnswers = question.answers
    ? shuffleAnswers([...question.answers])
    : defaultQuestion.answers;
  const items = question.answers
    ? shuffleAnswers([...question.answers]).map((answer, index) => (
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
            <h2>{answer.content}</h2>
          </Button>
        </div>
      ))
    : null;

  const correctAnswer = question.answers
    ? question.answers.find((answer) => answer.isTrue === "Y")?.content
    : null;

  const falseAnswers = question.answers
    ? getRandomFalseAnswers(question.answers, 2)
    : [];

  const randomAnswer = () => {
    let probability;
    if (qNumber < 8) {
      probability = 0.9;
    } else if (qNumber < 10) {
      probability = 0.7;
    } else if (qNumber < 12) {
      probability = 0.5;
    } else {
      probability = 0.25;
    }

    return selectAnswerWithProbability(question.answers || [], probability);
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
      (answer, index) => index !== trueAnswerIndex
    );
    const randomIndex = Math.floor(Math.random() * falseAnswers.length);
    return falseAnswers[randomIndex];
  };
  const randomAnswerAsk = randomAnswer();
  return (
    <div style={{ padding: "50px" }} className="row">
      <VTV3 />

      <div className="row">
        <LeftPart
          setHideBotMiddle={setHideBotMiddle}
          setShowResetModal={setShowResetModal}
          setQNumber={setQNumber}
          setHide5050={setHide5050}
          setHideReview={setHideReview}
          setHideGG={setHideGG}
          setHideAsk={setHideAsk}
          qNumber={qNumber}
          setTopMiddleBody={setTopMiddleBody}
          setHideRightPart={setHideRightPart}
        />
        <MiddlePart
          topMiddleBody={topMiddleBody}
          setShowClickStopModal={setShowClickStopModal}
          hideBotMiddle={hideBotMiddle}
          items={items}
          qNumber={qNumber}
          question={question}
          setShow5050={setShow5050}
          setShowClickAsk={setShowClickAsk}
          setShowReviewModal={setShowReviewModal}
          questions={questions}
          setQuestion={setQuestion}
          hide5050={hide5050}
          setHide5050={setHide5050}
          hideReview={hideReview}
          setHideReview={setHideReview}
          hideGG={hideGG}
          setHideGG={setHideGG}
          hideAsk={hideAsk}
          setHideAsk={setHideAsk}
        />
        <RightPart qNumber={qNumber} hideRightPart={hideRightPart} />
      </div>

      <WrongModal
        showWrongModal={showWrongModal}
        setShowWrongModal={setShowWrongModal}
        correctAnswer={correctAnswer}
        setQNumber={setQNumber}
        setHideBotMiddle={setHideBotMiddle}
        wrongReward={wrongReward}
        wrongImg={wrongImg}
        setHideRightPart={setHideRightPart}
      />
      <CorrectModal
        setHideRightPart={setHideRightPart}
        setShowCorrectModal={setShowCorrectModal}
        showCorrectModal={showCorrectModal}
        qNumber={qNumber}
        setQNumber={setQNumber}
        setHideBotMiddle={setHideBotMiddle}
        correct={correct}
        correctImg={correctImg}
      />
      <ResetModal
        setHideRightPart={setHideRightPart}
        setHide5050={setHide5050}
        setHideReview={setHideReview}
        setHideGG={setHideGG}
        setHideAsk={setHideAsk}
        setQNumber={setQNumber}
        setShowResetModal={setShowResetModal}
        showResetModal={showResetModal}
        setHideBotMiddle={setHideBotMiddle}
        setTopMiddleBody={setTopMiddleBody}
      />
      <ClickStopPlayModal
        setStop={setStop}
        qNumber={qNumber}
        setReward={setReward}
        setShowClickStopModal={setShowClickStopModal}
        showClickStopModal={showClickStopModal}
        setShowStopPlayModal={setShowStopPlayModal}
      />
      <StopPlayModal
        setHideRightPart={setHideRightPart}
        stop={stop}
        reward={reward}
        showStopPlayModal={showStopPlayModal}
        setShowStopPlayModal={setShowStopPlayModal}
        setHideBotMiddle={setHideBotMiddle}
      />
      <Click5050Modal
        show5050={show5050}
        setShow5050={setShow5050}
        falseAnswers={falseAnswers}
      />
      <ClickAsk
        showClickAsk={showClickAsk}
        setShowAskModal={setShowAskModal}
        setAskImg={setAskImg}
        setAskState={setAskState}
      />
      <AskModal
        askState={askState}
        setShowClickAsk={setShowClickAsk}
        setShowAskModal={setShowAskModal}
        showAskModal={showAskModal}
        randomAnswerAsk={randomAnswerAsk}
        askImg={askImg}
      />

      <ReviewModal
        qNumber={qNumber}
        etcAnswers={etcAnswers}
        showReviewModal={showReviewModal}
        setShowReviewModal={setShowReviewModal}
      />
    </div>
  );
}

export default AppContainer;
