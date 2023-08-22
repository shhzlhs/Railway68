import React from "react";
import { Button } from "reactstrap";

function Edit(props) {
  let { onHandleEditButton } = props;
  let handleEditButton = () => {
    onHandleEditButton();
  };
  return (
    <Button
      style={{ padding: "0px", backgroundColor: "white", border: "none" }}
      onClick={handleEditButton}
    >
      <img
        style={{
          width: "40px",
          height: "40px",
          objectFit: "cover",
        }}
        src="/imgs/icons/Edit.png"
        alt="Edit"
      ></img>
    </Button>
  );
}

export default Edit;
