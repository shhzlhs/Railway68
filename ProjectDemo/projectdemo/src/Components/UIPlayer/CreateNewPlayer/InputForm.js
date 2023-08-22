import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { generateId } from "../../../Utils/Helpers/GenerateId";

function InputForm(props) {
  let { onHandleCreatePlayer, teams } = props;
  let year = new Date().getFullYear();
  let [Name, setName] = useState("");
  let [Nation, setNation] = useState("");
  let [Position, setPosition] = useState("");
  let [TeamId, setTeamId] = useState("");
  let [JoinedYear, setJoinedYear] = useState("");
  let handleCreatePlayer = () => {
    let player = {
      id: generateId(),
      name: Name,
      nation: Nation,
      position: Position,
      teamId: TeamId,
      joinedYear: JoinedYear,
    };
    onHandleCreatePlayer(player);
  };
  let handleReset = () => {
    setName("");
    setNation("");
    setPosition("");
    setTeamId("");
    setJoinedYear("");
  };
  let teamItems = teams.map((team, index) => {
    return (
      <option value={team.id} key={index}>
        {team.name}
      </option>
    );
  });
  return (
    <Container>
      <Form style={{ width: "450px" }}>
        <FormGroup>
          <Label for="Name">Name</Label>
          <Input
            id="Name"
            name="Name"
            placeholder="Input Name"
            type="text"
            value={Name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="Nation">Nation</Label>
          <Input
            id="Nation"
            name="Nation"
            placeholder="Input Nation"
            type="text"
            value={Nation}
            onChange={(event) => {
              setNation(event.target.value);
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="Position">Select position</Label>
          <Input
            id="Position"
            name="Position"
            type="select"
            value={Position}
            onChange={(event) => {
              setPosition(event.target.value);
            }}
          >
            <option value={""}></option>
            <option value={"GK"}>GK</option>
            <option value={"DF"}>DF</option>
            <option value={"MF"}>MF</option>
            <option value={"WF"}>WF</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="Team">Select a Team</Label>
          <Input
            id="Team"
            name="Team"
            type="select"
            value={TeamId}
            onChange={(event) => {
              setTeamId(event.target.value);
            }}
          >
            <option value={""}></option>
            {teamItems}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="JoinedYear">Joined year</Label>
          <Input
            id="JoinedYear"
            name="JoinedYear"
            placeholder="Joined Year"
            type="number"
            min="2000"
            max={year}
            value={JoinedYear}
            onChange={(event) => {
              setJoinedYear(event.target.value);
            }}
          ></Input>
        </FormGroup>
      </Form>
      <Button color="success" onClick={handleCreatePlayer}>
        Create
      </Button>
      <Button
        style={{ marginLeft: "20px" }}
        onClick={handleReset}
        color="warning"
      >
        Reset
      </Button>
    </Container>
  );
}

export default InputForm;
