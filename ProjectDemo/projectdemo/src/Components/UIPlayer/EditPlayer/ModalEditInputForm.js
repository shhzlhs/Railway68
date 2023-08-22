import React from "react";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import EditInputForm from "./EditInputForm";

function ModalEditInputForm(props) {
  let {
    player,
    teams,
    onHandleCloseEditModal,
    showFormEdit,
    onHandleEditPlayer,
  } = props;
  let handleCloseEditModal = () => {
    onHandleCloseEditModal();
  };

  return (
    <Container>
      <br></br>
      <Modal fade={false} isOpen={showFormEdit}>
        <ModalHeader>
          <h3>
            Edit{" "}
            <b style={{ color: "red" }}>
              <i>{player.name}</i>
            </b>
          </h3>
          <br></br>
          <p>Please input the correct informations</p>
        </ModalHeader>
        <ModalBody>
          <EditInputForm
            onHandleCloseModal={onHandleCloseEditModal}
            player={player}
            teams={teams}
            onHandleEditPlayer={onHandleEditPlayer}
          ></EditInputForm>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleCloseEditModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalEditInputForm;
