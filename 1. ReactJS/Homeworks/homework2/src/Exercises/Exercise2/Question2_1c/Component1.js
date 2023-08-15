import React, { Component } from "react";

class Component1 extends Component {
  render() {
    return (
      <>
        <div
          style={{ background: "orange" }}
          class="col-xs-4 col-sm-4 col-md-4 col-lg-4"
        >
          <img
            src="/imgs/Rashford.jpg"
            class="img-responsive"
            alt="Image"
          ></img>

          <div
            style={{
              color: "white",
            }}
            class="row"
          >
            <p>
              <b>
                <br></br>Number 10: MARCUS RASHFORD
              </b>
            </p>
          </div>

          <div class="row">
            <p>
              Marcus Rashford MBE (born 31 October 1997) is an English
              professional footballer who plays as a forward for Premier League
              club Manchester United and the England national team. He is
              considered as one of the best forwards in the world.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Component1;
