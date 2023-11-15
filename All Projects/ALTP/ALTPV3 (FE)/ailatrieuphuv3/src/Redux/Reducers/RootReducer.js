import { combineReducers } from "redux";
import { qNumberReducer } from "./Q_NumberReducer";
import { questionReducer } from "./QuestionReducer";
import { answersReducer } from "./AnswersReducer";
import {
  askReducer,
  b_5050Reducer,
  ggReducer,
  reviewReducer,
} from "./Show_HideButtonReducer";
import {
  showAskModalReducer,
  showClickStopPlayModalReducer,
  showCorrectModalReducer,
  showProModalReducer,
  showReviewModalReducer,
  showStopPlayModalReducer,
  showWrongModalReducer,
} from "./Show_HideModalReducers";
import { setAskStateReducer, setImgAskReducer } from "./ItemsReducer";
let rootReducer = combineReducers({
  qNumber: qNumberReducer,
  question: questionReducer,
  answers: answersReducer,
  hide5050: b_5050Reducer,
  hideGG: ggReducer,
  hideAsk: askReducer,
  hideReview: reviewReducer,
  showAskModal: showAskModalReducer,
  showReviewModal: showReviewModalReducer,
  askImg: setImgAskReducer,
  askState: setAskStateReducer,
  showProModal: showProModalReducer,
  showCorrectModal: showCorrectModalReducer,
  showWrongModal: showWrongModalReducer,
  showStopPlayModal: showStopPlayModalReducer,
  showClickStopModal: showClickStopPlayModalReducer,
});
export { rootReducer };
