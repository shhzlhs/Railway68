import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import Menu from "./Menu";
import { routers } from "./Routes";
import { getCategories } from "./Redux/Actions/CategoryActions";
import { getAuthors } from "./Redux/Actions/AuthorActions";

function App() {
  const dispathRedux = useDispatch();

  useEffect(() => {
    dispathRedux(getCategories());
    dispathRedux(getAuthors());
  }, []);
  return (
    <div className="container">
      <Menu />
      {routers}
    </div>
  );
}

export default App;
