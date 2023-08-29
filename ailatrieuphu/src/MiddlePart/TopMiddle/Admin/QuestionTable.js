import React from "react";
import { Table } from "reactstrap";
import QuestionTBody from "./QuestionTBody";

function QuestionTable(props) {
  let { questions } = props;
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="row">
        <h1>All Questions</h1>
      </div>

      <Table dark>
        <thead>
          <tr>
            <th>ID</th>
            <th>Contnent</th>
            <th>Q-Number</th>
          </tr>
        </thead>
        <tbody>
          <QuestionTBody questions={questions} />
        </tbody>
      </Table>
    </div>
  );
}

export default QuestionTable;
