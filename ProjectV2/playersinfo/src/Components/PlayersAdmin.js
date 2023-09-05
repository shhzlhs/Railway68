import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  buttonStyle1,
  divNormal,
  imgButtonStyle2,
  imgButtonStyle4,
  midStyle,
  playerAvatarStyle1,
  playerID,
  playerInfoRow,
  teamRowStyle,
} from "../Styles";
import { Button } from "reactstrap";
import AddPlayerModal from "../Modals/AddPlayerModal";
import {
  showAddPlayer,
  showDeletePlayers,
  showEditPlayer,
  showSingleDeletePlayer,
} from "../Redux/Actions/FormActions";
import EditPlayerModal from "../Modals/EditPlayerModal";
import { getAllPlayers, setPlayerEdit } from "../Redux/Actions/PlayerActions";
import { getAllTeams } from "../Redux/Actions/TeamActions";
import DeletePlayersModal from "../Modals/DeletePlayersModal";
import { getPlayersByIdsAPI } from "../API/PlayerAPIs";
import { defaultPlayer } from "../DefaltPars";
import DeleteAPlayerModal from "../Modals/DeleteAPlayerModal";

function PlayersAdmin(props) {
  let dispathRedux = useDispatch();

  useEffect(() => {
    dispathRedux(getAllTeams());
    dispathRedux(getAllPlayers());
  }, []);
  let reduxState = useSelector((state) => state);

  let players = reduxState.players;
  let [ids, setIds] = useState([]);
  let [playersDelete, setPlayersDelete] = useState([defaultPlayer]);
  let [playerDel, setPlayerDel] = useState({});
  const getPlayersByIds = () => {
    if (ids.length > 0) {
      getPlayersByIdsAPI(ids).then((res) => {
        setPlayersDelete(res);
      });
    }
  };
  const items = players.map((player, index) => {
    const src = "/imgs/players/" + player.avatar;
    return (
      <div key={index} style={midStyle} className="row">
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <img style={playerAvatarStyle1} alt={player.name} src={src}></img>
        </div>

        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div style={playerID} className="row">
            <b>ID: {player.id}</b>
          </div>
          <div style={playerInfoRow} className="row">
            <b>Name: {player.name}</b>
          </div>
          <div style={playerInfoRow} className="row">
            <b>Nation: {player.nation}</b>
          </div>
          <div style={playerInfoRow} className="row">
            <b>Position: {player.position}</b>
          </div>
          <div style={playerInfoRow} className="row">
            <b>Team: {player.teamName}</b>
          </div>
          <div style={playerInfoRow} className="row">
            <b>Joined Year: {player.joinedYear}</b>
          </div>
        </div>

        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={player.id}
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
            onClick={() => {
              dispathRedux(setPlayerEdit(player));
              dispathRedux(showEditPlayer());
            }}
            style={buttonStyle1}
          >
            <img
              style={imgButtonStyle4}
              alt="edit"
              src="/imgs/icons/edit.png"
            ></img>
          </Button>
        </div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
          <Button
            onClick={() => {
              setPlayerDel(player);
              dispathRedux(showSingleDeletePlayer());
            }}
            style={buttonStyle1}
          >
            <img
              style={imgButtonStyle4}
              alt="del"
              src="/imgs/icons/DELETE.png"
            ></img>
          </Button>
        </div>

        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
      </div>
    );
  });

  return (
    <div style={divNormal} className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div style={teamRowStyle} className="row">
        <Button
          onClick={() => {
            dispathRedux(showAddPlayer());
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
          onClick={() => {
            if (ids.length > 0) {
              getPlayersByIds();
              dispathRedux(showDeletePlayers());
            }
          }}
          style={buttonStyle1}
        >
          <img
            style={imgButtonStyle2}
            alt="DELETE"
            src="/imgs/icons/DELETE.png"
          ></img>
        </Button>
      </div>
      {items}
      <AddPlayerModal />
      <EditPlayerModal />
      <DeletePlayersModal
        ids={ids}
        setIds={setIds}
        playersDelete={playersDelete}
      />
      <DeleteAPlayerModal playerDel={playerDel} />
    </div>
  );
}

export default PlayersAdmin;
