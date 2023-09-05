import { api } from "./API";

const getCompetitionsAPI = () => {
  return api("GET", "competitions/", null);
};
export { getCompetitionsAPI };
