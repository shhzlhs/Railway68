import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { buttonStyle1, imgButtonStyle3, imgModalStyle2 } from "../Styles";
import { closeSingleDeletePlayer } from "../Redux/Actions/FormActions";
import { deletePlayers } from "../Redux/Actions/PlayerActions";

function DeleteAPlayerModal(props) {
  let { playerDel } = props;
  let src = "/imgs/players/" + playerDel.avatar;
  let dispathRedux = useDispatch();
  let reduxState = useSelector((state) => state);
  let showModal = reduxState.showSingleDeletePlayer;
  return (
    <Modal isOpen={showModal} fade={false}>
      <ModalHeader>
        <img style={imgModalStyle2} alt="player" src={src}></img>
      </ModalHeader>
      <ModalBody>
        <h1>
          Do you want to delete <b style={{ color: "red" }}>{playerDel.name}</b>
          ?
        </h1>
      </ModalBody>
      <ModalFooter>
        <Button
          style={buttonStyle1}
          onClick={() => {
            dispathRedux(deletePlayers(playerDel.id));
            dispathRedux(closeSingleDeletePlayer());
          }}
        >
          <img
            style={imgButtonStyle3}
            alt="yes"
            src="/imgs/icons/Yes.png"
          ></img>
        </Button>
        <Button
          style={buttonStyle1}
          onClick={() => {
            dispathRedux(closeSingleDeletePlayer());
          }}
        >
          <img style={imgButtonStyle3} alt="no" src="/imgs/icons/No.png"></img>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default DeleteAPlayerModal;
