import { combineReducers } from "redux";
import { competitionReducers } from "./CompetitionReducers";
import { teamReducers } from "./TeamReducers";
import { playerReducers, setPlayerEditReducers } from "./PlayerReducers";
import {
  showAddPlayerReducers,
  showAddTeamReducers,
  showDeletePlayersReducers,
  showDeleteTeamFormReducers,
  showEditPlayerReducers,
  showSingleDeletePlayerReducers,
  showSingleDeleteTeamReducers,
  showTeamInfoReducers,
} from "./FormReducers";

const rootReducers = combineReducers({
  competitions: competitionReducers,
  teams: teamReducers,
  players: playerReducers,
  showDeleteTeamForm: showDeleteTeamFormReducers,
  showTeamInfo: showTeamInfoReducers,
  showAddTeam: showAddTeamReducers,
  showSingleDeleteTeam: showSingleDeleteTeamReducers,
  showAddPlayer: showAddPlayerReducers,
  showEditPlayer: showEditPlayerReducers,
  playerEdit: setPlayerEditReducers,
  showDeletePlayers: showDeletePlayersReducers,
  showSingleDeletePlayer: showSingleDeletePlayerReducers,
});

export { rootReducers };
