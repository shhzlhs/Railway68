import React from "react";
import HomePageMenu from "../Components/HomePageMenu";
import StoriesPage from "../Components/StoriesPage";

function HomePage(props) {
  return (
    <div className="container">
      <HomePageMenu />
      <StoriesPage />
    </div>
  );
}

export default HomePage;
