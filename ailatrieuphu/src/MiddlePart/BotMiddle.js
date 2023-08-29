import React from "react";
import FormQuestion from "./BotMiddle/FormQuestion";
import HelpButtons from "./BotMiddle/HelpButtons";

function BotMiddle(props) {
  let {
    items,
    hideBotMiddle,
    question,
    qNumber,
    setShowClickStopModal,
    setShow5050,
    setShowClickAsk,
    hide5050,
    setHide5050,
    hideAsk,
    setHideAsk,
    hideGG,
    setHideGG,
    hideReview,
    setHideReview,
    setShowReviewModal,
  } = props;
  return (
    <div hidden={hideBotMiddle} className="row">
      <HelpButtons
        setShowClickStopModal={setShowClickStopModal}
        setShow5050={setShow5050}
        setShowClickAsk={setShowClickAsk}
        hide5050={hide5050}
        setHide5050={setHide5050}
        hideReview={hideReview}
        setHideReview={setHideReview}
        hideGG={hideGG}
        setHideGG={setHideGG}
        hideAsk={hideAsk}
        setHideAsk={setHideAsk}
        qNumber={qNumber}
        setShowReviewModal={setShowReviewModal}
      />
      <FormQuestion items={items} qNumber={qNumber} question={question} />
    </div>
  );
}

export default BotMiddle;
