import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class Top extends Component {
  // countClick = 0;
  // Khai báo contructor:
  constructor(props) {
    super(props);
    // Khai báo Sate:
    this.state = { countClick: 0 };
  }
  dataFromTopToApp = "Aaa...Có rồi!";
  handleSentData = () => {
    let { onReceive } = this.props;
    if (this.state.countClick < 10) {
      this.setState({ countClick: this.state.countClick + 1 });
      // this.countClick = this.countClick + 1;
    }
    onReceive(this.dataFromTopToApp);
  };
  render() {
    let { keyss, keyss1, topName } = this.props;
    console.log(keyss);
    console.log(keyss1);
    return (
      <div>
        <div
          style={{
            backgroundColor: "green",
            color: "white",
            height: "30px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
          className="row"
        >
          <h3
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {topName}
          </h3>
        </div>

        <div style={{ height: "70px" }} className="row">
          <form>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
              <input
                type="text"
                placeholder="Input something here"
                style={{
                  margin: "10px",
                  width: "600px",
                  height: "30px",
                }}
              ></input>
            </div>

            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "flex-end",
              }}
              className="col-xs-2 col-sm-2 col-md-2 col-lg-2"
            >
              <button
                type="button"
                onClick={this.handleSentData}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  margin: "10px",
                  height: "30px",
                }}
              >
                Sent Data
              </button>
            </div>
          </form>
          <br></br>
          <h4>Bạn đã click {this.state.countClick} lần </h4>
        </div>
      </div>
    );
  }
}

export default Top;
