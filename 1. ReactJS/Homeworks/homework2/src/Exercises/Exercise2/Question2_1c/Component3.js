import React, { Component } from "react";

class Component3 extends Component {
  render() {
    return (
      <>
        <div
          style={{ background: "orange" }}
          class="col-xs-4 col-sm-4 col-md-4 col-lg-4"
        >
          <img src="/imgs/Licha.jpg" class="img-responsive" alt="Image"></img>

          <div
            style={{
              color: "white",
            }}
            class="row"
          >
            <p>
              <br></br>
              <b>Number 6: LISANDRO MARTÍNEZ</b>
            </p>
          </div>

          <div class="row">
            <p>
              Lisandro Martínez (born 18 January 1998) is an Argentine
              professional footballer who plays primarily as a centre-back for
              Premier League club Manchester United and the Argentina national
              team. He is known for his movement with the ball, toughness and
              aggressive tackling.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Component3;
