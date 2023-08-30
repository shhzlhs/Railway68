import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";
import { defaultQuestion } from "../../../API/DefaulParams";
import { buttonStyle1, imgButtonStyle1 } from "../../../CSS/Styles";

function QAInfo(props) {
  let { questionFindById, setShowQAInfoModal, showQAInfoModal } = props;
  const items = questionFindById
    ? questionFindById.answers.map((answer, index) => {
        return (
          <tr key={index}>
            <td>{answer.id}</td>
            <td>{answer.content}</td>
            <td>{answer.isTrue}</td>
          </tr>
        );
      })
    : defaultQuestion.answers.map((answer, index) => {
        return (
          <tr key={index}>
            <td>{answer.id}</td>
            <td>{answer.content}</td>
            <td>{answer.isTrue}</td>
          </tr>
        );
      });
  return (
    <Modal fade={false} isOpen={showQAInfoModal}>
      <ModalHeader>
        <h1>
          Câu hỏi {questionFindById.id} <br></br>
          <i style={{ color: "red" }}>{questionFindById.content}</i>
        </h1>
      </ModalHeader>
      <ModalBody>
        <h2>Answers:</h2>
        <Table hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Content</th>
              <th>Is True?</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </Table>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            setShowQAInfoModal(false);
          }}
          style={buttonStyle1}
        >
          <img style={imgButtonStyle1} alt="close" src="/imgs/close.png"></img>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default QAInfo;
