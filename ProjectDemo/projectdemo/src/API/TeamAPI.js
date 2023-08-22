import { api } from "./api";

const getTeamsAPI = () => {
  return api("GET", "teams/", null);
};
const addTeamAPI = (team) => {
  return api("POST", "teams/", team);
};

// export
export { getTeamsAPI, addTeamAPI };
