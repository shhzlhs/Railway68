import { api } from "./API";

const getPlayersAPI = (search) => {
  let url = "players?search=" + search;
  return api("GET", url, null);
};
const getPlayersByTeamsAPI = (teamIds) => {
  const url = `players/${teamIds}`;
  return api("GET", url, null);
};
const getPlayersByIdsAPI = (ids) => {
  const url = `players/ids/${ids}`;
  return api("GET", url, null);
};
const addPlayerAPI = (player) => {
  return api("POST", "players/", player);
};
const editPlayerAPI = (player) => {
  const url = `players/${player.id}`;
  return api("PUT", url, player);
};
const deletePlayersAPI = (ids) => {
  const url = `players/${ids}`;
  return api("DELETE", url, null);
};
export {
  getPlayersAPI,
  getPlayersByTeamsAPI,
  addPlayerAPI,
  editPlayerAPI,
  deletePlayersAPI,
  getPlayersByIdsAPI,
};
