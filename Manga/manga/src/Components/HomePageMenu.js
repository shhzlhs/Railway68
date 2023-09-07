import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../Redux/Actions/CategoryActions";

function HomePageMenu(props) {
  let dispathRedux = useDispatch();
  let reduxState = useSelector((state) => state);

  let categories = reduxState.categories;

  useEffect(() => {
    dispathRedux(getCategories());
  }, []);

  const items = categories.map((category, index) => {
    return (
      <div key={index} className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
        {category.name}
      </div>
    );
  });
  return <div className="row">{items}</div>;
}

export default HomePageMenu;
