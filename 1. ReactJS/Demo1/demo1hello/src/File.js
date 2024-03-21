import React, { useState } from "react";

function File(props) {
  let [f, setF] = useState("");
  return (
    <div>
      <input
        value={f}
        type="file"
        onChange={(event) => {
          setF(event.target.value);
        }}
      />
      <img src={f} alt="AAA" />
    </div>
  );
}

export default File;
