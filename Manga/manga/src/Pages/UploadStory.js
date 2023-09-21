import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { midRowStyle } from "../Styles";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { setStoryAwait } from "../Redux/Actions/StoryActions";
function UploadStory(props) {
  const dispathRedux = useDispatch();
  let [title, setTitle] = useState("");
  let [chapterNumber, setChapterNumber] = useState("");
  let [authorId, setAuthorId] = useState("");
  let [ids, setIds] = useState([]);

  let story = {
    title: title,
    chapterNumber: chapterNumber,
    authorId: authorId,
    ids: ids,
  };
  const reduxSate = useSelector((state) => state);
  const authors = reduxSate.authors;
  const categories = reduxSate.categories;
  let stories = reduxSate.storyAwaits;
  console.log("sa: ", stories);
  const authorOptions = authors.map((author, index) => {
    return (
      <option key={index} value={author.id}>
        {author.name}
      </option>
    );
  });
  const checkBox = categories.map((category) => {
    return (
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                value={category.id}
                onChange={(event) => {
                  const newValue = event.target.value;
                  if (ids.includes(newValue)) {
                    const newIds = ids.filter((id) => id !== newValue);
                    setIds(newIds);
                  } else {
                    const newIds = [...ids, newValue];
                    setIds(newIds);
                  }
                }}
              />
            </label>
          </div>
        </div>
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          {category.name}
        </div>
      </div>
    );
  });

  return (
    <div style={midRowStyle}>
      <h1>Hãy cho mọi người thấy tác phẩm tuyệt vời của bạn!</h1>
      <Form style={{ width: "900px" }}>
        <FormGroup>
          <Label>Tên truyện: </Label>
          <Input
            type="text"
            placeholder="Nhập tiêu đề truyện..."
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Số chương: </Label>
          <Input
            type="number"
            min="0"
            placeholder="Nhập số chương"
            value={chapterNumber}
            onChange={(event) => {
              setChapterNumber(event.target.value);
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Bạn là ai? </Label>
          <br></br>
          <Input
            type="select"
            value={authorId}
            onChange={(event) => {
              setAuthorId(event.target.value);
            }}
          >
            <option>---</option>
            {authorOptions}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Thể loại: </Label> <br />
          {checkBox}
        </FormGroup>
      </Form>
      <Button
        onClick={() => {
          const newStories = [...stories, story];
          dispathRedux(setStoryAwait(newStories));
          alert(
            "Tải truyện thành công! Truyện của bạn sẽ sớm được duyệt và chúng tôi sẽ thông báo đến bạn trong thời gian sớm nhất! Rất cảm ơn sự đóng góp của bạn!"
          );
        }}
      >
        Upload
      </Button>
    </div>
  );
}

export default UploadStory;
