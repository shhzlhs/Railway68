import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class Top extends Component {
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

        <div style={{ height: "50px" }} className="row">
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
              <input
                type="submit"
                style={{
                  backgroundColor: "red",
                  color: "white",
                  margin: "10px",
                  height: "30px",
                }}
                value={"Sent Data"}
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Top;
