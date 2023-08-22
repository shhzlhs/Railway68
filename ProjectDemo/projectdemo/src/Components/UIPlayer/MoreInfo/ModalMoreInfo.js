import React from "react";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import MorePlayerInfo from "./MorePlayerInfo";
import Logo from "../../UITeam/Logo";
function ModalMoreInfo(props) {
  let { player, showPlayerModal, onHandleClosePlayerModal } = props;
  let handleCloseButton = () => {
    onHandleClosePlayerModal();
  };
  return (
    <Container>
      <Modal fade={false} isOpen={showPlayerModal}>
        <ModalHeader>
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <Logo teamName={player.teamName} />
            </div>

            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
              <h1 style={{ color: "red" }}>
                <i>{player.name}</i>
              </h1>
            </div>
          </div>
        </ModalHeader>
        <ModalBody>
          {" "}
          <MorePlayerInfo player={player} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleCloseButton} color="danger">
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalMoreInfo;
