import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePageMenu from "../Components/HomePageMenu";
import StoriesPage from "../Components/StoriesPage";
import { getStories } from "../Redux/Actions/StoryActions";

function HomePage(props) {
  const reduxSate = useSelector((state) => state);
  let search = reduxSate.search;
  const dispatchRedux = useDispatch();
  useEffect(() => {
    dispatchRedux(getStories(search));
  }, [search]);
  return (
    <div className="container">
      <HomePageMenu />
      <StoriesPage />
    </div>
  );
}

export default HomePage;
