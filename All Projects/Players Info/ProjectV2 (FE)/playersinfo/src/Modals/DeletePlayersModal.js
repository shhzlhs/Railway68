import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {
  closeDeletePlayers,
  closeDeleteTeamsForm,
} from "../Redux/Actions/FormActions";
import { buttonStyle1, imgButtonStyle2, imgModalStyle1 } from "../Styles";
import { deletePlayers } from "../Redux/Actions/PlayerActions";

function DeletePlayersModal(props) {
  let { ids, setIds, playersDelete } = props;

  let dispathRedux = useDispatch();
  let reduxState = useSelector((state) => state);
  let showDeletePlayers = reduxState.showDeletePlayers;
  const createText = () => {
    if (ids.length === 1) {
      return "player";
    } else return "players";
  };
  const text = createText();
  const items = playersDelete.map((player, index) => {
    const src = "/imgs/players/" + player.avatar;
    return (
      <img key={index} style={imgModalStyle1} alt="player" src={src}></img>
    );
  });

  return (
    <Modal fade={false} isOpen={showDeletePlayers}>
      <ModalHeader>
        <h1>
          Do you want to DELETE{" "}
          <b style={{ color: "red" }}>
            {ids.length} {text}
          </b>{" "}
          selected?
        </h1>
      </ModalHeader>
      <ModalBody>{items}</ModalBody>
      <ModalFooter>
        <Button
          style={buttonStyle1}
          onClick={() => {
            dispathRedux(deletePlayers(ids));
            dispathRedux(closeDeletePlayers());
            setIds([]);
          }}
        >
          <img
            style={imgButtonStyle2}
            alt="yes"
            src="/imgs/icons/Yes.png"
          ></img>
        </Button>
        <Button
          style={buttonStyle1}
          onClick={() => {
            dispathRedux(closeDeleteTeamsForm());
          }}
        >
          <img style={imgButtonStyle2} alt="no" src="/imgs/icons/No.png"></img>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default DeletePlayersModal;
