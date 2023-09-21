import React from "react";
import { Modal, ModalFooter, ModalHeader, Button } from "reactstrap";
import { buttonStyle1, imgButtonStyle1 } from "../../../CSS/Styles";

function DeleteQModal(props) {
  let { showDeleteQModal, setShowDeleteQModal, deleteQuestions, ids, setIds } =
    props;
  const items = ids.map((id) => {
    return id + ",";
  });
  const yesss = () => {
    deleteQuestions(ids);
    setIds([]);
    setShowDeleteQModal(false);
  };

  let nooo = () => {
    setShowDeleteQModal(false);
  };
  return (
    <Modal fade={false} isOpen={showDeleteQModal}>
      <ModalHeader>
        <h1>
          Bạn có chắc chắn muốn xoá các câu hỏi:{" "}
          <b style={{ color: "red" }}>{items}</b> tổng cộng {ids.length} câu
          hỏi?
        </h1>
      </ModalHeader>
      <ModalFooter>
        <Button onClick={yesss} style={buttonStyle1}>
          <img style={imgButtonStyle1} src="/imgs/Yes.png" alt="YES"></img>
        </Button>
        <Button onClick={nooo} style={buttonStyle1}>
          <img style={imgButtonStyle1} src="/imgs/No.png" alt="NO"></img>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default DeleteQModal;
