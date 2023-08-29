import React from "react";
import { Button } from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../CSS/Styles";

function RefreshButton(props) {
  let { setShowResetModal, qNumber } = props;
  const rePlay = () => {
    if (qNumber > 1) {
      setShowResetModal(true);
    }
  };
  return (
    <div className="row">
      <Button onClick={rePlay} style={buttonStyle1}>
        <img
          style={imgButtonStyle1}
          src="/imgs/Re.png"
          alt="Refresh
            "
        ></img>
      </Button>
    </div>
  );
}

export default RefreshButton;
