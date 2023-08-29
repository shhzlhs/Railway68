import React from "react";
import { Button } from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../../CSS/Styles";

function ReviewButton(props) {
  let { setShowReviewModal, hideReview, setHideReview } = props;

  let handleReview = () => {
    setShowReviewModal(true);
    setHideReview(true);
  };
  return (
    <Button hidden={hideReview} onClick={handleReview} style={buttonStyle1}>
      {" "}
      <img style={imgButtonStyle1} src="/imgs/review.png" alt="Ask"></img>
    </Button>
  );
}

export default ReviewButton;
