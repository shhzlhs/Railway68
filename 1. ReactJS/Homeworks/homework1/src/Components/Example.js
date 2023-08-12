import React, { Component } from "react";

class Example extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="panel panel-default">
            <div style={{ background: "red" }} class="panel-heading">
              Example
            </div>
            <div class="panel-body">
              <form>
                <div class="row">
                  <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Input field"
                    />
                  </div>

                  <div
                    class="col-xs-2 col-sm-2 col-md-2 col-lg-2"
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
