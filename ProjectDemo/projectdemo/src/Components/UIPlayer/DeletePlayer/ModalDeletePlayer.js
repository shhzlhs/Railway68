import React from "react";
import {
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import DeleteForm from "./DeleteForm";
import Avatar from "../Avatar";

function ModalDeletePlayer(props) {
  let {
    player,
    onHandleDeletePlayer,
    onHandleCloseDeleteModal,
    showFormDelete,
  } = props;
  return (
    <Container>
      <Modal fade={false} isOpen={showFormDelete}>
        <ModalHeader>
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <Avatar avatar={player.avatar}></Avatar>
            </div>

            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
              <img
                style={{
                  width: "300px",
                  height: "100px",
                  objectFit: "cover",
                }}
                src="/imgs/delete.gif"
              ></img>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          <DeleteForm
            player={player}
            onHandleCloseDeleteModal={onHandleCloseDeleteModal}
            onHandleDeletePlayer={onHandleDeletePlayer}
          ></DeleteForm>
        </ModalBody>
        <ModalFooter>
          <h3>
            <i>"Delete if you hate this player"</i>
          </h3>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalDeletePlayer;
