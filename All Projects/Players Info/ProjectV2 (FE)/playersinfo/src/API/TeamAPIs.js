import { api } from "./API";

const getTeamsAPI = () => {
  return api("GET", "teams/", null);
};
const getTeamsByCompetitionAPI = (competitionId) => {
  const url = `teams/${competitionId}`;

  return api("GET", url, null);
};
const getTeamsByIdsAPI = (ids) => {
  const url = `teams/ids/${ids}`;
  return api("GET", url, null);
};
const addTeamAPI = (team) => {
  return api("POST", "teams/", team);
};
const deleteTeamsAPI = (ids) => {
  const url = `teams/${ids}`;
  return api("DELETE", url, null);
};
export {
  getTeamsAPI,
  getTeamsByCompetitionAPI,
  addTeamAPI,
  deleteTeamsAPI,
  getTeamsByIdsAPI,
};
