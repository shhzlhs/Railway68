import { getCategoriesAPI } from "../../API/CategoryAPI";
import { GET_CATEGORIES } from "../Contants/ActionsType";

const getCategoriesRedux = (categories) => {
  return {
    type: GET_CATEGORIES,
    payload: categories,
  };
};

const getCategories = () => {
  return (dispath) => {
    return getCategoriesAPI().then((res) => {
      dispath(getCategoriesRedux(res));
    });
  };
};
export { getCategories, getCategoriesRedux };
