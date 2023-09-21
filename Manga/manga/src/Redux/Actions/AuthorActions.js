import { getAuthorsAPI } from "../../API/AuthorAPIs";
import { GET_AUTHORS } from "../Contants/ActionsType";

const getAuthorsRedux = (authors) => {
  return {
    type: GET_AUTHORS,
    payload: authors,
  };
};

const getAuthors = () => {
  return (dispath) => {
    return getAuthorsAPI().then((res) => {
      dispath(getAuthorsRedux(res));
    });
  };
};
export { getAuthors, getAuthorsRedux };
