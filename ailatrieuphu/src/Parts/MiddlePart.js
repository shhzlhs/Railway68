import React from "react";
import TopMiddle from "../MiddlePart/TopMiddle";
import BotMiddle from "../MiddlePart/BotMiddle";

function MiddlePart(props) {
  let {
    items,
    hideBotMiddle,
    qNumber,
    question,
    setShowClickStopModal,
    setShow5050,
    setShowClickAsk,
    setShowChangeModal,
    questions,
    setQuestion,
    hide5050,
    setHide5050,
    hideAsk,
    setHideAsk,
    hideGG,
    setHideGG,
    hideReview,
    setHideReview,
    topMiddleBody,
    setShowReviewModal,
  } = props;
  return (
    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
      <TopMiddle topMiddleBody={topMiddleBody} />
      <BotMiddle
        setShowReviewModal={setShowReviewModal}
        setShowClickStopModal={setShowClickStopModal}
        items={items}
        hideBotMiddle={hideBotMiddle}
        qNumber={qNumber}
        question={question}
        setShow5050={setShow5050}
        setShowClickAsk={setShowClickAsk}
        setShowChangeModal={setShowChangeModal}
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
    </div>
  );
}

export default MiddlePart;
