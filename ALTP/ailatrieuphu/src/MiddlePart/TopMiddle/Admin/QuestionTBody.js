import React from "react";
import { cbStyle } from "../../../CSS/Styles";

function QuestionTBody(props) {
  let { questions, setIds, ids } = props;
  const items = questions.map((question, index) => {
    return (
      <tr key={index}>
        <th scope="row">{question.id}</th>
        <td>{question.content}</td>
        <td>{question.number}</td>
        <td>
          <div className="checkbox">
            <input
              style={cbStyle}
              type="checkbox"
              value={question.id}
              onChange={(event) => {
                const newValue = event.target.value;
                if (ids.includes(newValue)) {
                  const newIds = ids.filter((id) => id !== newValue); // Loại bỏ giá trị nếu đã tồn tại
                  setIds(newIds);
                } else {
                  const newIds = [...ids, newValue]; // Thêm giá trị mới nếu chưa tồn tại
                  setIds(newIds);
                }
              }}
            />
          </div>
        </td>
      </tr>
    );
  });

  return items;
}

export default QuestionTBody;
