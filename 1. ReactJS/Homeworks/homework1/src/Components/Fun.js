import React from "react";
import App from "../App";

function Fun(props) {
  let keyss = props.keyss;
  let fruits = props.fruits;
  console.log(fruits);
  return (
    <div>
      <div class="panel panel-default">
        <div class="panel-body">
          <h1>
            <b>{keyss}</b>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Fun;
