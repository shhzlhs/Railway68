import React from "react";

function FormAnwer(props) {
  let { items } = props;
  return (
    <div st className="row">
      {items}
    </div>
  );
}

export default FormAnwer;
