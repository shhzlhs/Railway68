import React from "react";
import { Button } from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../../CSS/Styles";

function StopPlayButton(props) {
  let { setShowClickStopModal } = props;
  return (
    <Button
      onClick={() => {
        setShowClickStopModal(true);
      }}
      style={buttonStyle1}
    >
      {" "}
      <img
        style={imgButtonStyle1}
        src="/imgs/Resigned.png"
        alt="Change Question"
      ></img>
    </Button>
  );
}

export default StopPlayButton;
