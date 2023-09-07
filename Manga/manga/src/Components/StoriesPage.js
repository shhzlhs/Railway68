import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStories } from "../Redux/Actions/StoryActions";
import { imgStyle1, midStyle } from "../Styles";
function StoriesPage(props) {
  let dispathRedux = useDispatch();
  let reduxState = useSelector((state) => state);
  let stories = reduxState.stories;
  const search = "";
  useEffect(() => {
    dispathRedux(getStories(search));
  }, []);
  const items = stories.map((story, index) => {
    const src = "/imgs/stories/story_" + story.id + ".jpg";
    return (
      <div key={index} class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <div style={midStyle} className="row">
          <img style={imgStyle1} src={src} alt={story.name}></img>
        </div>

        <div style={midStyle} className="row">
          {story.name}
        </div>

        <div style={midStyle} className="row">
          Chapter-{story.chapterNumber} {story.authorName}
        </div>
      </div>
    );
  });
  return <div>{items}</div>;
}

export default StoriesPage;
