import { api } from "./API";

export const getCategoriesAPI = () => {
  return api("GET", "categories/", null);
};
