import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../../../CSS/Styles";
import { defaulButtonStyle } from "../../../API/DefaulParams";

function QuestionsByNumber(props) {
  let {
    setShowQAInfoModal,
    showQuestionsByNumber,
    setShowQuestionsByNumber,
    setQuestionFindById,
    questionsFindByNumber,
  } = props;
  const items = questionsFindByNumber.map((question, index) => {
    return (
      <tr key={index}>
        <td>{question.id}</td>
        <td>
          <Button
            onClick={() => {
              setQuestionFindById(question);
              setShowQAInfoModal(true);
            }}
            style={defaulButtonStyle}
          >
            {question.content}
          </Button>
        </td>
        <td>{question.number}</td>
      </tr>
    );
  });
  return (
    <Modal fade={false} isOpen={showQuestionsByNumber}>
      <ModalHeader>Find Question By Number:</ModalHeader>
      <ModalBody>
        <Table hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Content</th>
              <th>Q_Number</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </Table>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            setShowQuestionsByNumber(false);
          }}
          style={buttonStyle1}
        >
          <img style={imgButtonStyle1} alt="close" src="/imgs/close.png"></img>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default QuestionsByNumber;
