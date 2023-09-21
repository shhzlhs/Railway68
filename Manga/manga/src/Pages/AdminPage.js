import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { addStory, setStoryAwait } from "../Redux/Actions/StoryActions";
function AdminPage(props) {
  const reduxState = useSelector((state) => state);
  const dispathRedux = useDispatch();
  const storyAwaits = reduxState.storyAwaits;

  const storyAwaitsItem = storyAwaits.map((storyAwait, index) => {
    return (
      <div className="row">
        Title: {storyAwait.title};Chapers: {storyAwait.chapterNumber}; Author:{" "}
        {storyAwait.authorId}{" "}
        <Button
          onClick={() => {
            dispathRedux(addStory(storyAwait));
            const newStories = storyAwaits.filter(
              (story) => story !== storyAwait
            );
            dispathRedux(setStoryAwait(newStories));
          }}
        >
          Upload
        </Button>
        <Button>Delete</Button>
      </div>
    );
  });
  return <div>{storyAwaitsItem}</div>;
}

export default AdminPage;
