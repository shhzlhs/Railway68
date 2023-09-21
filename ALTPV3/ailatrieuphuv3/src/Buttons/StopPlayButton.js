import React from "react";
import { buttonStyle1, imgButtonStyle1 } from "../Styles";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { showClickStopPlayModal } from "../Redux/Actions/Show_Hide_ModalActions";
function StopPlayButton(props) {
  let dispatchRedux = useDispatch();
  return (
    <Button
      onClick={() => {
        dispatchRedux(showClickStopPlayModal());
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
