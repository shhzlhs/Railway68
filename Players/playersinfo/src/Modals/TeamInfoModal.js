import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {
  buttonStyle1,
  imgButtonStyle1,
  imgButtonStyle3,
  imgModalStyle,
} from "../Styles";
import { closeTeamInfo } from "../Redux/Actions/FormActions";

function TeamInfoModal(props) {
  let { team } = props;
  let src1 = "/imgs/logoes/" + team.logo;
  let src2 = "/imgs/teams/" + team.name + ".jpg";
  let dispathRedux = useDispatch();
  let reduxState = useSelector((state) => state);
  let showTeamInfo = reduxState.showTeamInfo;
  return (
    <Modal fade={false} isOpen={showTeamInfo}>
      <ModalHeader>
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img style={imgButtonStyle1} alt="team" src={src1}></img>
          </div>

          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
            <h1>{team.name}</h1>
          </div>
        </div>
      </ModalHeader>
      <ModalBody>
        <img style={imgModalStyle} alt="team" src={src2}></img>

        <p style={{ textAlign: "justify" }}>{team.info}</p>
      </ModalBody>
      <ModalFooter>
        <Button
          style={buttonStyle1}
          onClick={() => {
            dispathRedux(closeTeamInfo());
          }}
        >
          <img
            style={imgButtonStyle3}
            alt="no"
            src="/imgs/icons/close.png"
          ></img>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default TeamInfoModal;
