import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

function EditInputForm(props) {
  let year = new Date().getFullYear();
  let { player, onHandleEditPlayer, teams, onHandleCloseModal } = props;
  let [Name, setName] = useState(player.name);
  let [Nation, setNation] = useState(player.nation);
  let [Position, setPosition] = useState(player.position);
  let [TeamId, setTeamId] = useState(player.teamId);
  let [JoinedYear, setJoinedYear] = useState(player.joinedYear);
  let handleEditPlayer = () => {
    let playerEdit = {
      id: player.id,
      name: Name,
      nation: Nation,
      position: Position,
      teamId: TeamId,
      joinedYear: JoinedYear,
    };
    onHandleEditPlayer(playerEdit);
    onHandleCloseModal();
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
      <Button
        color="success"
        onClick={handleEditPlayer}
        onHandleCloseModal={onHandleCloseModal}
      >
        Edit
      </Button>
    </Container>
  );
}

export default EditInputForm;
