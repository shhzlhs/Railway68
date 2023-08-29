import React from "react";
import Button5050 from "./Button5050";
import GGButton from "./GGButton";
import AskButton from "./AskButton";
import { midBarDiv } from "../../CSS/Styles";
import StopPlayButton from "./StopPlayButton";
import ReviewButton from "./ReviewButton";

function HelpButtons(props) {
  let {
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
    qNumber,
    setShowReviewModal,
  } = props;
  return (
    <div style={midBarDiv} className="row">
      <Button5050
        setShow5050={setShow5050}
        hide5050={hide5050}
        setHide5050={setHide5050}
      />
      <ReviewButton
        setShowReviewModal={setShowReviewModal}
        hideReview={hideReview}
        setHideReview={setHideReview}
      />
      <GGButton hideGG={hideGG} setHideGG={setHideGG} />
      <AskButton
        qNumber={qNumber}
        hideAsk={hideAsk}
        setHideAsk={setHideAsk}
        setShowClickAsk={setShowClickAsk}
      />
      <StopPlayButton setShowClickStopModal={setShowClickStopModal} />
    </div>
  );
}

export default HelpButtons;
