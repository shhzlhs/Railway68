import React from "react";
import { Button } from "reactstrap";

function Delete(props) {
  let { onHandleDeleteButton } = props;
  let handleDeleteButton = () => {
    onHandleDeleteButton();
  };
  return (
    <Button
      style={{ padding: "0px", backgroundColor: "white", border: "none" }}
      onClick={handleDeleteButton}
    >
      <img
        style={{
          width: "40px",
          height: "40px",
          objectFit: "cover",
        }}
        src="/imgs/icons/delete.png"
        alt="Delete"
      ></img>
    </Button>
  );
}

export default Delete;
