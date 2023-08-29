import React from "react";
import Welcome from "./TopMiddle/Welcome";
function TopMiddle(props) {
  let { topMiddleBody } = props;
  return <div>{topMiddleBody}</div>;
}

export default TopMiddle;
