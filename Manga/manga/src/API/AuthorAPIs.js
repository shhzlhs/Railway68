import { api } from "./API";

const getAuthorsAPI = () => {
  return api("GET", "authors/", null);
};

const addAuthorAPI = (author) => {
  return api("POST", "authors/", author);
};

const editAuthor = (author) => {
  return api("PUT", "authors/", author);
};

const deleteAuthorssAPI = (ids) => {
  const url = `authors/${ids}`;
  return api("DELETE", url, null);
};

export { getAuthorsAPI, editAuthor, deleteAuthorssAPI, addAuthorAPI };
