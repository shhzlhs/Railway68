import React, { useState } from "react";
import { Button, Table } from "reactstrap";
import QuestionTBody from "./QuestionTBody";
import { buttonStyle0, imgButtonStyle0 } from "../../../CSS/Styles";
import DeleteQModal from "./DeleteQModal";

function QuestionTable(props) {
  let { questions, deleteQuestions } = props;
  let [ids, setIds] = useState([]);
  let [showDeleteQModal, setShowDeleteQModal] = useState(false);
  let handleDeleteButton = () => {
    setShowDeleteQModal(true);
  };
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="row">
        <h1>All Questions</h1>
      </div>

      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Contnent</th>
            <th>Q-Number</th>
            <th>
              <Button onClick={handleDeleteButton} style={buttonStyle0}>
                <img
                  style={imgButtonStyle0}
                  alt="del"
                  src="/imgs/del.png"
                ></img>
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          <QuestionTBody questions={questions} setIds={setIds} ids={ids} />
        </tbody>
      </Table>
      <DeleteQModal
        showDeleteQModal={showDeleteQModal}
        setShowDeleteQModal={setShowDeleteQModal}
        deleteQuestions={deleteQuestions}
        ids={ids}
      />
    </div>
  );
}

export default QuestionTable;
