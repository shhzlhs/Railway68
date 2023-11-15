import React from "react";
import { midBarDiv } from "../../Styles";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import { useSelector } from "react-redux";
function QuestionBar(props) {
  let question = useSelector((state) => state.question);
  let qNumber = useSelector((state) => state.qNumber);
  return (
    <div style={midBarDiv} className="row">
      <Card
        className="my-2"
        color="primary"
        inverse
        style={{
          width: "1000px",
        }}
      >
        <CardHeader>
          <h3>Câu hỏi số {qNumber}:</h3>
        </CardHeader>
        <CardBody>
          <CardTitle tag="h1">{question.content}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default QuestionBar;
