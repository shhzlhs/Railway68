import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Container } from "reactstrap";
import FormAnwer from "./FormAnwer";
import { formQuestionAnswerStyle, midBarDiv } from "../../CSS/Styles";

function FormQuestion(props) {
  let { items, question, qNumber } = props;
  return (
    <Container style={formQuestionAnswerStyle}>
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
            <h3>Câu hỏi số {qNumber}</h3>
          </CardHeader>
          <CardBody>
            <CardTitle tag="h1">{question.content}</CardTitle>
          </CardBody>
        </Card>
      </div>
      <FormAnwer items={items} />
    </Container>
  );
}

export default FormQuestion;
