import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { buttonStyle1 } from "../Styles";
import { useDispatch } from "react-redux";
import { getStoriesRedux } from "../Redux/Actions/StoryActions";
function HomePageMenu(props) {
  let dispathRedux = useDispatch();
  let reduxState = useSelector((state) => state);

  let categories = reduxState.categories;

  const items = categories.map((category, index) => {
    return (
      <div key={index} className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
        <Button
          onClick={() => {
            dispathRedux(getStoriesRedux(category.stories));
          }}
          style={buttonStyle1}
        >
          {category.name}
        </Button>
      </div>
    );
  });
  return <div className="row">{items}</div>;
}

export default HomePageMenu;
