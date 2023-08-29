import React from "react";
import { Table } from "reactstrap";
import AnswerTBody from "./AnswerTBody";

function AnswerTable(props) {
  let { answers } = props;
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="row">
        <h1>All Answers</h1>
      </div>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Content</th>
            <th>Question</th>
            <th>Is True?</th>
          </tr>
        </thead>
        <tbody>
          <AnswerTBody answers={answers} />
        </tbody>
      </Table>
    </div>
  );
}

export default AnswerTable;
