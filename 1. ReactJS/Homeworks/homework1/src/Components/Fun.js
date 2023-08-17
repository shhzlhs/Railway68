import React from "react";

function Fun(props) {
  let keyss = props.keyss;
  let fruits = props.fruits;
  return (
    <div>
      <div class="panel panel-default">
        <div class="panel-body">
          <h1>
            <b>{keyss}</b>
            <br></br>
            <b>{fruits}</b>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Fun;
