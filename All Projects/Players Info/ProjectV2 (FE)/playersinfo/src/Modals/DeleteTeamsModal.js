import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { deleteTeams } from "../Redux/Actions/TeamActions";
import { closeDeleteTeamsForm } from "../Redux/Actions/FormActions";
import { buttonStyle1, imgButtonStyle1, imgButtonStyle2 } from "../Styles";

function DeleteTeamsModal(props) {
  let { ids, setIds, teamsDelete } = props;

  let dispathRedux = useDispatch();
  let reduxState = useSelector((state) => state);
  let showDeleteTeamForm = reduxState.showDeleteTeamForm;
  const createText = () => {
    if (ids.length === 1) {
      return "team";
    } else return "teams";
  };
  const text = createText();
  const items = teamsDelete.map((team, index) => {
    const src = "/imgs/logoes/" + team.name + ".png";
    return <img key={index} style={imgButtonStyle1} alt="Team" src={src}></img>;
  });
  return (
    <Modal fade={false} isOpen={showDeleteTeamForm}>
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
            dispathRedux(deleteTeams(ids));
            dispathRedux(closeDeleteTeamsForm());
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

export default DeleteTeamsModal;
