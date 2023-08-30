import React from "react";
import { Button } from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../../CSS/Styles";

function GGButton(props) {
  let { hideGG, setHideGG } = props;
  let openGG = () => {
    window.open("https://www.google.com.vn/", "_blank");
  };
  let handleGG = () => {
    setHideGG(true);
    openGG();
  };
  return (
    <Button hidden={hideGG} onClick={handleGG} style={buttonStyle1}>
      <img style={imgButtonStyle1} src="/imgs/GG.png" alt="GG"></img>
    </Button>
  );
}

export default GGButton;
