import React from "react";
import Bot from "./Components/Bot";
import Top from "./Components/Top";
import Fun from "./Components/Fun";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Example from "./Components/Example";
function App() {
  let valuess = "VALUE";
  let valuess1 = "VALUESSS";
  let topName = "TOP_NAME";
  let fruits = ["Banana", "Orange", "Apple", "Coconut"];
  return (
    <React.Fragment>
      <div class="row">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>

        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div
            style={{ border: "solid 2px blue", margin: "10px" }}
            className="row"
          >
            <Top keyss={valuess} keyss1={valuess1} topName={topName} />
          </div>

          <div className="row"></div>

          <div
            style={{
              border: "solid 2px red",
              margin: "10px",
              height: "150px",
            }}
            className="row"
          >
            <Bot keyss={valuess} />
          </div>

          <div
            class="row"
            style={{ border: "solid 2px black", margin: "10px" }}
          >
            <Example />
          </div>
        </div>
      </div>

      <div class="row">
        <Fun keyss={valuess} fruits={fruits} />
      </div>
    </React.Fragment>
  );
}

export default App;
