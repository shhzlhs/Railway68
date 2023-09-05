import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./Component/Menu";
import { routes } from "./Component/Routes";

function App() {

  return (
    <div class="container">
      <Menu />
      {routes}
    </div>
  );
}

export default App;
