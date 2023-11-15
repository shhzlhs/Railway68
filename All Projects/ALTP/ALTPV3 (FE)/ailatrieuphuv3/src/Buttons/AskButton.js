import React from "react";
import { Button } from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../Styles";
import { useSelector, useDispatch } from "react-redux";
import { showAskModal } from "../Redux/Actions/Show_Hide_ModalActions";
import { hideAskAc } from "../Redux/Actions/Show_Hide_Button";
function AskButton(props) {
  let hideAsk = useSelector((state) => state.hideAsk);
  let qNumber = useSelector((state) => state.qNumber);
  let dispatchRedux = useDispatch();
  return (
    <Button
      hidden={hideAsk || qNumber < 6}
      onClick={() => {
        dispatchRedux(showAskModal());
        dispatchRedux(hideAskAc());
      }}
      style={buttonStyle1}
    >
      <img style={imgButtonStyle1} src="/imgs/Ask.png" alt="Ask Someone"></img>
    </Button>
  );
}

export default AskButton;
