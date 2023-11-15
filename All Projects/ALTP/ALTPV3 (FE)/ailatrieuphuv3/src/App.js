import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import VTV3 from "./Components/VTV3";
import PlayArea from "./Components/PlayArea";
import { appStyle } from "./Styles";
import { getRandomQuestionByNumber } from "./Redux/Actions/QuestionActions";
import { setAnswers } from "./Redux/Actions/AnswerAction";
import RightPart from "./Components/RightPart";
function App() {
  let dispatchRedux = useDispatch();
  let reduxState = useSelector((state) => state);
  let qNumber = reduxState.qNumber;
  const shuffleAnswers = (list) => {
    const shuffledList = [...list];
    for (let i = shuffledList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }

    return shuffledList;
  };
  useEffect(() => {
    dispatchRedux(getRandomQuestionByNumber(qNumber));
  }, [qNumber]);
  let question = reduxState.question;
  useEffect(() => {
    if (question.answers) {
      let answers = shuffleAnswers(question.answers);
      dispatchRedux(setAnswers(answers));
    }
  }, [question]);
  return (
    <div style={appStyle} className="App">
      <VTV3 />
      <PlayArea />
      <RightPart />
    </div>
  );
}

export default App;
