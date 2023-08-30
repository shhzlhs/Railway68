import React, { useState } from "react";
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
import { buttonStyle1, imgButtonStyle1 } from "../../../CSS/Styles";

function CreateModal(props) {
  let { setShowCreateModal, showCreateModal, createQuestion } = props;
  let [qContent, setQContent] = useState("");
  let [qNumber, setQNumber] = useState("");
  let [aContent1, setAContent1] = useState("");
  let [aContent2, setAContent2] = useState("");
  let [aContent3, setAContent3] = useState("");
  let [aContent4, setAContent4] = useState("");
  let answer1 = { content: aContent1, isTrue: "Y" };
  let answer2 = { content: aContent2, isTrue: "N" };
  let answer3 = { content: aContent3, isTrue: "N" };
  let answer4 = { content: aContent4, isTrue: "N" };

  let newQuestion = {
    content: qContent,
    number: qNumber,
    answers: [answer1, answer2, answer3, answer4],
  };
  let handleCreate = () => {
    createQuestion(newQuestion);
  };
  return (
    <Modal fade={false} isOpen={showCreateModal}>
      <ModalHeader>
        <h1>Add A Question</h1>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>Question Content:</Label>
            <Input
              type="text"
              value={qContent}
              placeholder="Input Question Content"
              onChange={(event) => {
                setQContent(event.target.value);
              }}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Question Number:</Label>
            <Input
              type="number"
              min="1"
              max="15"
              value={qNumber}
              placeholder="Input Question Number"
              onChange={(event) => {
                setQNumber(event.target.value);
              }}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>True Answer:</Label>
            <Input
              type="tex"
              value={aContent1}
              placeholder="True Answer Content"
              onChange={(event) => {
                setAContent1(event.target.value);
              }}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>False Answer 1:</Label>
            <Input
              type="tex"
              value={aContent2}
              placeholder="False Answer 1 Content"
              onChange={(event) => {
                setAContent2(event.target.value);
              }}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>False Answer 2:</Label>
            <Input
              type="tex"
              value={aContent3}
              placeholder="False Answer 2 Content"
              onChange={(event) => {
                setAContent3(event.target.value);
              }}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>False Answer 2:</Label>
            <Input
              type="tex"
              value={aContent4}
              placeholder="False Answer 3 Content"
              onChange={(event) => {
                setAContent4(event.target.value);
              }}
            ></Input>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={handleCreate} style={buttonStyle1}>
          <img style={imgButtonStyle1} alt="add" src="/imgs/add.png"></img>
        </Button>
        <Button
          onClick={() => {
            setShowCreateModal(false);
          }}
          style={buttonStyle1}
        >
          <img style={imgButtonStyle1} alt="close" src="/imgs/close.png"></img>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default CreateModal;
