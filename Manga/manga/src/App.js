import "./App.css";
import Menu from "./Menu";
import { routers } from "./Routes";

function App() {
  return (
    <div className="container">
      <Menu />
      {routers}
    </div>
  );
}

export default App;
