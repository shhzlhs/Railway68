import React from "react";
import { Button, Container } from "reactstrap";

function DeleteForm(props) {
  let { player, onHandleDeletePlayer, onHandleCloseDeleteModal } = props;
  let handleDeletePlayer = () => {
    let playerDelete = player;
    onHandleDeletePlayer(playerDelete);
    console.log(playerDelete);
    onHandleCloseDeleteModal();
  };
  let handleCloseDeleteModal = () => {
    onHandleCloseDeleteModal();
  };
  return (
    <Container>
      <div
        style={{
          width: "450px",
          padding: "10px",
        }}
      >
        <h3>
          Do you want to Delele <b style={{ color: "red" }}>{player.name}</b> ?{" "}
        </h3>
        <br></br>
        <Button
          color="danger"
          style={{ marginLeft: "300px" }}
          onClick={handleDeletePlayer}
        >
          Yes
        </Button>
        <Button
          color="success"
          style={{ marginLeft: "10px" }}
          onClick={handleCloseDeleteModal}
        >
          No
        </Button>
      </div>
    </Container>
  );
}

export default DeleteForm;
