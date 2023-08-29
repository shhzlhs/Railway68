import React from "react";
import PlayButton from "../LeftPart/PlayButton";
import AdminButton from "../LeftPart/AdminButton";
import RefreshButton from "../LeftPart/RefreshButton";

function LeftPart(props) {
  let {
    setHideBotMiddle,
    setShowResetModal,
    setQNumber,
    setHide5050,
    setHideReview,
    setHideGG,
    setHideAsk,
    qNumber,
    setTopMiddleBody,
  } = props;
  return (
    <div className="co1-xs-2 col-sm-2 col-md-2 col-lg-2 d-flex flex-column align-items-center">
      <PlayButton
        setTopMiddleBody={setTopMiddleBody}
        setHide5050={setHide5050}
        setHideReview={setHideReview}
        setHideGG={setHideGG}
        setHideAsk={setHideAsk}
        setHideBotMiddle={setHideBotMiddle}
        setQNumber={setQNumber}
      />
      <AdminButton
        setTopMiddleBody={setTopMiddleBody}
        setHideBotMiddle={setHideBotMiddle}
      />
      <RefreshButton setShowResetModal={setShowResetModal} qNumber={qNumber} />
    </div>
  );
}

export default LeftPart;
