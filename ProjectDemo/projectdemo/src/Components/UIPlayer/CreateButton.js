import React from "react";
import { Button } from "reactstrap";
function CreateButton(props) {
  let { onHandleCreateButton } = props;
  let handleCreatePlayer = () => {
    onHandleCreateButton();
  };
  return (
    <Button
      color="success"
      style={{
        marginTop: "20px",
        paddingLeft: "30px",
        paddingRight: "30px",
        backgroundColor: "white",
        border: "none",
      }}
      onClick={handleCreatePlayer}
    >
      <img
        style={{
          width: "50px",
          height: "50px",
          objectFit: "cover",
        }}
        src="/imgs/icons/AddPlayer.png"
        alt="Edit"
      ></img>
    </Button>
  );
}

export default CreateButton;
