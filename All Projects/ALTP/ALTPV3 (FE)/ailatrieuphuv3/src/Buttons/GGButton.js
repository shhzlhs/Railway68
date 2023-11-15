import React from "react";
import { Button } from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../Styles";
import { useSelector, useDispatch } from "react-redux";
import { hideGGAc } from "../Redux/Actions/Show_Hide_Button";
function GGButton(props) {
  let reduxState = useSelector((state) => state);
  let dispatchRedux = useDispatch();
  let openGG = () => {
    window.open("https://www.google.com.vn/", "_blank");
  };
  let handleGG = () => {
    dispatchRedux(hideGGAc());
    openGG();
  };
  return (
    <Button onClick={handleGG} hidden={reduxState.hideGG} style={buttonStyle1}>
      <img style={imgButtonStyle1} src="/imgs/GG.png" alt="GG"></img>
    </Button>
  );
}

export default GGButton;
