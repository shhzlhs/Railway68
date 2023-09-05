import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { buttonStyle1, imgButtonStyle3, imgModalStyle1 } from "../Styles";
import { editPlayer } from "../Redux/Actions/PlayerActions";
import { closeEditPlayer } from "../Redux/Actions/FormActions";

function EditPlayerModal(props) {
  let reduxState = useSelector((state) => state);
  let dispathRedux = useDispatch();
  let playerEdit = reduxState.playerEdit;
  let teams = reduxState.teams;
  let showEditPlayer = reduxState.showEditPlayer;
  let [name, setName] = useState("");
  let [nation, setNation] = useState("");
  let [position, setPosition] = useState("");
  let [teamId, setTeamId] = useState("");
  let [joinedYear, setJoinedYear] = useState("");
  let [info, setInfo] = useState("");
  let maxYear = new Date().getFullYear();
  useEffect(() => {
    if (teams.length > 0 && playerEdit) {
      let tId = null;
      const foundTeam = teams.find((team) => team.name === playerEdit.teamName);

      if (foundTeam) {
        tId = foundTeam.id;
      }
      setName(playerEdit.name);
      setNation(playerEdit.nation);
      setPosition(playerEdit.position);
      setJoinedYear(playerEdit.joinedYear);
      setInfo(playerEdit.info);
      setTeamId(tId);
    }
  }, [teams, playerEdit]);
  let src = "/imgs/players/" + playerEdit.avatar;
  let player = {
    id: playerEdit.id,
    name: name,
    nation: nation,
    position: position,
    teamId: teamId,
    joinedYear: joinedYear,
    info: info,
  };
  const items = teams.map((team, index) => {
    return (
      <option key={index} value={team.id}>
        {team.name}
      </option>
    );
  });

  return (
    <Modal fade={false} isOpen={showEditPlayer}>
      <ModalHeader>
        <img style={imgModalStyle1} src={src} alt="avatar"></img>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>Player's Name:</Label>
            <Input
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Player's Nation:</Label>
            <Input
              type="text"
              value={nation}
              onChange={(event) => {
                setNation(event.target.value);
              }}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Select Position:</Label>
            <br />
            <Input
              type="select"
              value={position}
              onChange={(event) => {
                setPosition(event.target.value);
              }}
            >
              <option>---</option>
              <option value="GK">GK</option>
              <option value="DF">DF</option>
              <option value="MF">MF</option>
              <option value="WF">GK</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Select A Team:</Label>
            <br />
            <Input
              type="select"
              value={teamId}
              onChange={(event) => {
                setTeamId(event.target.value);
              }}
            >
              <option>---</option>
              {items}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Joined Team Year:</Label>
            <Input
              type="number"
              min="2000"
              max={maxYear}
              value={joinedYear}
              onChange={(event) => {
                setJoinedYear(event.target.value);
              }}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Player's Info:</Label>
            <Input
              type="text"
              value={info}
              onChange={(event) => {
                setInfo(event.target.value);
              }}
            ></Input>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            dispathRedux(editPlayer(player));
            dispathRedux(closeEditPlayer());
          }}
          style={buttonStyle1}
        >
          <img
            style={imgButtonStyle3}
            alt="add"
            src="/imgs/icons/edit1.png"
          ></img>
        </Button>
        <Button
          onClick={() => {
            dispathRedux(closeEditPlayer());
          }}
          style={buttonStyle1}
        >
          <img
            style={imgButtonStyle3}
            alt="close"
            src="/imgs/icons/close.png"
          ></img>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default EditPlayerModal;
