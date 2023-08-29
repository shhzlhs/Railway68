import React from "react";
import { Button } from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../CSS/Styles";
import Welcome from "../MiddlePart/TopMiddle/Welcome";

function PlayButton(props) {
  let {
    setHideBotMiddle,
    setQNumber,
    setHide5050,
    setHideReview,
    setHideGG,
    setHideAsk,
    setTopMiddleBody,
  } = props;
  return (
    <div className="row">
      <Button
        onClick={() => {
          setHideBotMiddle(false);
          setTopMiddleBody(<Welcome />);
          setHide5050(false);
          setHideAsk(false);
          setHideReview(false);
          setHideGG(false);
          setQNumber(1);
        }}
        style={buttonStyle1}
      >
        <img style={imgButtonStyle1} src="/imgs/play.png" alt="play"></img>
      </Button>
    </div>
  );
}

export default PlayButton;
