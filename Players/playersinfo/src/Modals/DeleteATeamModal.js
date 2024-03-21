import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { buttonStyle1, imgButtonStyle1, imgButtonStyle3 } from "../Styles";
import { deleteTeams } from "../Redux/Actions/TeamActions";
import { closeSingleDeleteTeam } from "../Redux/Actions/FormActions";

function DeleteATeamModal(props) {
  let { teamDel } = props;
  let src = "/imgs/logoes/" + teamDel.logo;
  let dispathRedux = useDispatch();
  let reduxState = useSelector((state) => state);
  let showModal = reduxState.showSingleDeleteTeam;
  return (
    <Modal isOpen={showModal} fade={false}>
      <ModalHeader>
        <img style={imgButtonStyle1} alt="team" src={src}></img>
      </ModalHeader>
      <ModalBody>
        <h1>
          Do you want to delete <b style={{ color: "red" }}>{teamDel.name}</b>?
        </h1>
      </ModalBody>
      <ModalFooter>
        <Button
          style={buttonStyle1}
          onClick={() => {
            dispathRedux(deleteTeams(teamDel.id));
            dispathRedux(closeSingleDeleteTeam());
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
            dispathRedux(closeSingleDeleteTeam());
          }}
        >
          <img style={imgButtonStyle3} alt="no" src="/imgs/icons/No.png"></img>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default DeleteATeamModal;
