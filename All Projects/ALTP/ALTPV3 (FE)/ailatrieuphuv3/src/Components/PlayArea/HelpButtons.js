import React from "react";
import GGButton from "../../Buttons/GGButton";
import AskButton from "../../Buttons/AskButton";
import ReviewButton from "../../Buttons/ReviewButton";
import StopPlayButton from "../../Buttons/StopPlayButton";
import H_50_50_Button from "../../Buttons/H_50_50_Button";
import { midBarDiv } from "../../Styles";
import RePlayButton from "../../Buttons/RePlayButton";

function HelpButtons(props) {
  return (
    <div style={midBarDiv} className="row">
      <H_50_50_Button />
      <ReviewButton /> <GGButton />
      <AskButton />
      <StopPlayButton />
      <RePlayButton />
    </div>
  );
}

export default HelpButtons;
