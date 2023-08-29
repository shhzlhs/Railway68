import React from "react";
import { Button } from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../../CSS/Styles";

function AskButton(props) {
  let { setShowClickAsk, hideAsk, setHideAsk, qNumber } = props;
  let handleAsk = () => {
    setShowClickAsk(true);
    setHideAsk(true);
  };
  return (
    <Button
      onClick={handleAsk}
      hidden={hideAsk || qNumber < 6}
      style={buttonStyle1}
    >
      <img style={imgButtonStyle1} src="/imgs/Ask.png" alt="Ask Someone"></img>
    </Button>
  );
}

export default AskButton;
