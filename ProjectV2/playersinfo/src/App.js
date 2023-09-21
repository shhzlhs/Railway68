import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Menu from "./Components/Menu";
import { routes } from "./Routes";
import { appStyle } from "./Styles";
import { getAllCompetitions } from "./Redux/Actions/CompetitionActions";
import { getAllTeams } from "./Redux/Actions/TeamActions";
import { getAllPlayers } from "./Redux/Actions/PlayerActions";
import { useEffect } from "react";

function App() {
  let search = useSelector((state) => state.search);
  let dispathRedux = useDispatch();
  useEffect(() => {
    dispathRedux(getAllCompetitions());
    dispathRedux(getAllTeams());
    dispathRedux(getAllPlayers(search));
  }, [search]);
  return (
    <>
      <Menu />
      <div style={appStyle} className="row">
        {routes}
      </div>
    </>
  );
}

export default App;
