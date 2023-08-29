import React, { useState } from "react";
import { Button } from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../../CSS/Styles";

function Button5050(props) {
  let { setShow5050, hide5050, setHide5050 } = props;
  let onClick = () => {
    setShow5050(true);
    setHide5050(true);
  };
  return (
    <Button onClick={onClick} hidden={hide5050} style={buttonStyle1}>
      <img style={imgButtonStyle1} src="/imgs/5050.png" alt="5050"></img>
    </Button>
  );
}

export default Button5050;
