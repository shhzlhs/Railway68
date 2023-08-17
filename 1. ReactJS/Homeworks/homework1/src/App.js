import React, { Component } from "react";
import Bot from "./Components/Bot";
import Top from "./Components/Top";
import Fun from "./Components/Fun";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Example from "./Components/Example";
class App extends Component {
  valuess = "VALUE";
  valuess1 = "VALUESSS";
  topName = "TOP_NAME";
  fruits = ["Banana", "Orange", "Apple", "Coconut"];
  constructor(props) {
    super(props);
    this.state = {
      varPara: "Chưa có gì",
    };
  }

  onReceive = (dataPara) => {
    this.setState({ varPara: dataPara });
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div
              style={{ border: "solid 2px blue", margin: "10px" }}
              className="row"
            >
              <h1>Data: {this.state.varPara}</h1>
              <Top
                keyss={this.valuess}
                keyss1={this.valuess1}
                topName={this.topName}
                onReceive={this.onReceive}
              />
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
              <Bot varPara={this.state.varPara} keyss={this.valuess} />
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
          <Fun keyss={this.valuess} fruits={this.fruits} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
