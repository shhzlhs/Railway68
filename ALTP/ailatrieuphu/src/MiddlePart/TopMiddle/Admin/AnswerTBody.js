import React from "react";

function AnswerTBody(props) {
  let { answers } = props;
  const items = answers.map((answer, index) => {
    return (
      <tr key={index}>
        <th scope="row">{answer.id}</th>
        <td>{answer.content}</td>
        <td>{answer.questionContent}</td>
        <td>{answer.isTrue}</td>
      </tr>
    );
  });
  return items;
}

export default AnswerTBody;
