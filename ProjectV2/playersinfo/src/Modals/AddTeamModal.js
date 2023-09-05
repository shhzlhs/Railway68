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
import { addTeam } from "../Redux/Actions/TeamActions";
import { closeAddTeam } from "../Redux/Actions/FormActions";
import { buttonStyle1, imgButtonStyle3 } from "../Styles";

function AddTeamModal(props) {
  let dispathRedux = useDispatch();
  let reduxState = useSelector((state) => state);
  let showAddTeam = reduxState.showAddTeam;
  let competitions = reduxState.competitions;
  let [name, setName] = useState("");
  let [createdYear, setCreatedYear] = useState("");
  let [cId, setCId] = useState("");
  let [info, setInfo] = useState("");
  let maxYear = new Date().getFullYear();
  let newTeam = {
    name: name,
    createdYear: createdYear,
    competitionId: cId,
    info: info,
  };
  let options = competitions.map((competition, index) => {
    return (
      <option key={index} value={competition.id}>
        {competition.name}
      </option>
    );
  });

  return (
    <Modal fade={false} isOpen={showAddTeam}>
      <ModalHeader>
        <h1>Add A Team</h1>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>Team's name:</Label>
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
            <Label>Team's Created Year:</Label>
            <Input
              type="number"
              min="1750"
              max={maxYear}
              placeholder="Input Created Year"
              value={createdYear}
              onChange={(event) => {
                setCreatedYear(event.target.value);
              }}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Select A Competition:</Label>
            <br></br>
            <Input
              type="select"
              value={cId}
              onChange={(event) => {
                setCId(event.target.value);
              }}
            >
              <option>---</option>
              {options}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Team's info:</Label>
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
          style={buttonStyle1}
          onClick={() => {
            dispathRedux(addTeam(newTeam));
            dispathRedux(closeAddTeam());
          }}
        >
          <img
            style={imgButtonStyle3}
            alt="add"
            src="/imgs/icons/add1.png"
          ></img>
        </Button>
        <Button
          style={buttonStyle1}
          onClick={() => {
            dispathRedux(closeAddTeam());
          }}
        >
          <img
            style={imgButtonStyle3}
            alt="add"
            src="/imgs/icons/close.png"
          ></img>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default AddTeamModal;
