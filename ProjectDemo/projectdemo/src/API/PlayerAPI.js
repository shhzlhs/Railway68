import { api } from "./api";

const getPlayersAPI = () => {
  return api("GET", "players/", null);
};

const addPlayerAPI = (player) => {
  return api("POST", "players/", player);
};

const deletePlayerAPI = (player) => {
  let url = "players/" + player.id;
  return api("DELETE", url, null);
};

const editPlayerAPI = (player) => {
  let url = "players/" + player.id;
  return api("PUT", url, player);
};
export { getPlayersAPI, addPlayerAPI, deletePlayerAPI, editPlayerAPI };
