import React from "react";
import { useSelector } from "react-redux";
import { divMarginTop, imgStyle1, midStyle } from "../Styles";
function StoriesPage(props) {
  let reduxState = useSelector((state) => state);
  let stories = reduxState.stories;

  const items = stories.map((story, index) => {
    const src = "/imgs/stories/story_" + story.id + ".jpg";
    return (
      <div key={index} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <div style={midStyle} className="row">
          <img style={imgStyle1} src={src} alt={story.title}></img>
        </div>

        <div style={midStyle} className="row">
          <b>{story.title}</b>
        </div>

        <div style={midStyle} className="row">
          Chapter {story.chapterNumber} <i> --{story.authorName}</i>
        </div>
      </div>
    );
  });
  return <div style={divMarginTop}>{items}</div>;
}

export default StoriesPage;
