import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import {
  buttonStyle1,
  divNormal,
  imgButtonStyle2,
  imgButtonStyle3,
  imgButtonStyle4,
  teamRowStyle,
} from "../Styles";
import {
  getAllPlayers,
  getPlayersByTeams,
} from "../Redux/Actions/PlayerActions";
import DeleteTeamsModal from "../Modals/DeleteTeamsModal";
import {
  showAddTeam,
  showDeleteTeamsForm,
  showSingleDeleteTeam,
} from "../Redux/Actions/FormActions";
import AddTeamModal from "../Modals/AddTeamModal";
import DeleteATeamModal from "../Modals/DeleteATeamModal";
import { getTeamsByIdsAPI } from "../API/TeamAPIs";
import { defaultTeam } from "../DefaltPars";

function TeamsAdmin(props) {
  let [ids, setIds] = useState([]);
  let [teamsDelete, setTeamDeletes] = useState([defaultTeam]);
  const getTeamsByIds = () => {
    if (ids.length > 0) {
      getTeamsByIdsAPI(ids).then((res) => {
        setTeamDeletes(res);
      });
    }
  };
  let [teamDel, setTeamDel] = useState({});
  let dispathRedux = useDispatch();
  let reduxState = useSelector((state) => state);
  let teams = reduxState.teams;

  const items = teams.map((team, index) => {
    const src = "/imgs/logoes/" + team.logo;
    return (
      <div key={index} style={teamRowStyle} className="row">
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <Button style={buttonStyle1}>
            <img alt={team.name} src={src} style={imgButtonStyle3}></img>
          </Button>
        </div>

        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">{team.id}</div>

        <div
          onClick={() => {
            dispathRedux(getPlayersByTeams([team.id]));
          }}
          className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
        >
          <Button style={buttonStyle1}>
            <h3>{team.name}</h3>
          </Button>
        </div>

        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={team.id}
                onChange={(event) => {
                  const newValue = event.target.value;
                  if (ids.includes(newValue)) {
                    const newIds = ids.filter((id) => id !== newValue);
                    setIds(newIds);
                  } else {
                    const newIds = [...ids, newValue];
                    setIds(newIds);
                  }
                }}
              />
            </label>
          </div>
        </div>

        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
          <Button
            style={buttonStyle1}
            onClick={() => {
              setTeamDel(team);
              dispathRedux(showSingleDeleteTeam());
            }}
          >
            <img
              style={imgButtonStyle4}
              alt="del"
              src="/imgs/icons/DELETE.png"
            ></img>
          </Button>
        </div>
      </div>
    );
  });

  return (
    <div style={divNormal} className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div style={teamRowStyle} className="row">
        <Button
          onClick={() => {
            dispathRedux(getAllPlayers(""));
          }}
          style={buttonStyle1}
        >
          <img style={imgButtonStyle2} alt="re" src="/imgs/icons/Re.png"></img>
        </Button>
        <Button
          onClick={() => {
            dispathRedux(showAddTeam());
          }}
          style={buttonStyle1}
        >
          <img
            style={imgButtonStyle2}
            alt="ADD"
            src="/imgs/icons/Add.png"
          ></img>
        </Button>
        <Button
          style={buttonStyle1}
          onClick={() => {
            if (ids.length > 0) {
              getTeamsByIds();
              dispathRedux(showDeleteTeamsForm());
            }
          }}
        >
          <img
            style={imgButtonStyle2}
            alt="DELETE"
            src="/imgs/icons/DELETE.png"
          ></img>
        </Button>
      </div>

      {items}
      <DeleteTeamsModal ids={ids} setIds={setIds} teamsDelete={teamsDelete} />
      <DeleteATeamModal teamDel={teamDel} />
      <AddTeamModal />
    </div>
  );
}

export default TeamsAdmin;
