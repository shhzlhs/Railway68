import React from "react";
import { Button } from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../Styles";
import { useDispatch, useSelector } from "react-redux";
import { hideReviewAc } from "../Redux/Actions/Show_Hide_Button";
import { showReviewModal } from "../Redux/Actions/Show_Hide_ModalActions";
function ReviewButton(props) {
  let dispatchRedux = useDispatch();
  let hideReview = useSelector((state) => state.hideReview);
  return (
    <Button
      hidden={hideReview}
      onClick={() => {
        dispatchRedux(hideReviewAc());
        dispatchRedux(showReviewModal());
      }}
      style={buttonStyle1}
    >
      {" "}
      <img style={imgButtonStyle1} src="/imgs/review.png" alt="Ask"></img>
    </Button>
  );
}

export default ReviewButton;
