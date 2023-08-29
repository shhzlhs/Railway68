import React from "react";

function QuestionTBody(props) {
  let { questions } = props;
  const items = questions.map((question, index) => {
    return (
      <tr key={index}>
        <th scope="row">{question.id}</th>
        <td>{question.content}</td>
        <td>{question.number}</td>
      </tr>
    );
  });

  return items;
}

export default QuestionTBody;
