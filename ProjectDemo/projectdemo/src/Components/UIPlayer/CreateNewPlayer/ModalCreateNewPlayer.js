import React from "react";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import InputForm from "./InputForm";

function ModalCreateNewPlayer(props) {
  let { showForm, onHandleCloseModal, onHandleCreatePlayer, teams } = props;
  let handleCloseModal = () => {
    onHandleCloseModal();
  };
  return (
    <Container>
      <br></br>

      <Modal fade={false} isOpen={showForm}>
        <ModalHeader>
          <h3>ADD NEW PLAYER</h3>
        </ModalHeader>
        <ModalBody>
          <InputForm
            onHandleCreatePlayer={onHandleCreatePlayer}
            teams={teams}
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleCloseModal} color="danger">
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalCreateNewPlayer;
