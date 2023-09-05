import "./App.css";
// import AppContainer from "./AppContainer";
import Menu from "./Components/Menu";
import { routes } from "./Routes";
import { appStyle } from "./Styles";

function App() {
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
