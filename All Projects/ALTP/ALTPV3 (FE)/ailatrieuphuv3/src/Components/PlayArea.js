import React from "react";
import { welcomeImg } from "../Imgs";
import FormQuestion from "./PlayArea/FormQuestion";
import { midBarDiv } from "../Styles";
import HelpButtons from "./PlayArea/HelpButtons";

function PlayArea(props) {
  return (
    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
      <div style={midBarDiv} className="row">
        {welcomeImg}
      </div>
      <HelpButtons />
      <FormQuestion />
    </div>
  );
}

export default PlayArea;
