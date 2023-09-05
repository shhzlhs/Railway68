import React, { useState } from "react";
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
import { buttonStyle1, imgButtonStyle3 } from "../Styles";
import { addPlayer } from "../Redux/Actions/PlayerActions";
import { closeAddPlayer } from "../Redux/Actions/FormActions";

function AddPlayerModal(props) {
  let reduxState = useSelector((state) => state);
  let dispathRedux = useDispatch();
  let teams = reduxState.teams;
  let showAddPlayer = reduxState.showAddPlayer;
  let [name, setName] = useState("");
  let [nation, setNation] = useState("");
  let [position, setPosition] = useState("");
  let [teamId, setTeamId] = useState("");
  let [joinedYear, setJoinedYear] = useState("");
  let [info, setInfo] = useState("");
  let maxYear = new Date().getFullYear();
  let newPlayer = {
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
    <Modal fade={false} isOpen={showAddPlayer}>
      <ModalHeader>
        <h1>Add A Player</h1>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>Player's Name:</Label>
            <Input
              type="text"
              placeholder="Input Name"
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
              placeholder="Input Nation"
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
              <option value="WF">WF</option>
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
              placeholder="Input Joined Year"
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
              placeholder="Input Info"
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
            dispathRedux(addPlayer(newPlayer));
            dispathRedux(closeAddPlayer());
          }}
          style={buttonStyle1}
        >
          <img
            style={imgButtonStyle3}
            alt="add"
            src="/imgs/icons/add1.png"
          ></img>
        </Button>
        <Button
          onClick={() => {
            dispathRedux(closeAddPlayer());
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

export default AddPlayerModal;
