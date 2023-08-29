import React from "react";
import { Button } from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../CSS/Styles";
import Admin from "../MiddlePart/TopMiddle/Admin";

function AdminButton(props) {
  let { setTopMiddleBody, setHideBotMiddle } = props;
  return (
    <div className="row">
      <Button
        onClick={() => {
          setTopMiddleBody(<Admin />);
          setHideBotMiddle(true);
        }}
        style={buttonStyle1}
      >
        <img style={imgButtonStyle1} alt="ADMIN" src="imgs/Admin.png"></img>
      </Button>
    </div>
  );
}

export default AdminButton;
