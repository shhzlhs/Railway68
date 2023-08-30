import "./App.css";
import { buttonStyle1, startBarStyle } from "./CSS/Styles";
function App() {
  return (
    <div className="container">
      <div style={startBarStyle} className="row">
        <div
          style={buttonStyle1}
          className="col-xs-1 col-sm-1 col-md-1 col-lg-1"
        >
          Home
        </div>
        <div
          style={buttonStyle1}
          className="col-xs-1 col-sm-1 col-md-1 col-lg-1"
        >
          Competitions
        </div>
        <div
          style={buttonStyle1}
          className="col-xs-1 col-sm-1 col-md-1 col-lg-1"
        >
          Teams
        </div>
        <div
          style={buttonStyle1}
          className="col-xs-1 col-sm-1 col-md-1 col-lg-1"
        >
          Players
        </div>
      </div>
    </div>
  );
}

export default App;
