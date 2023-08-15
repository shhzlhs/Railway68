import React, { Component } from "react";

class Component2 extends Component {
  render() {
    return (
      <>
        <div
          style={{ background: "orange" }}
          class="col-xs-4 col-sm-4 col-md-4 col-lg-4"
        >
          <img
            src="/imgs/Casemiro.jpg"
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
              <br></br>
              <b>Number 18: CASEMIRO</b>
            </p>
          </div>

          <div class="row">
            <p>
              Carlos Henrique Casimiro (born 23 February 1992), known as
              Casemiro, is a Brazilian professional footballer who plays as a
              defensive midfielder for Premier League club Manchester United and
              captains the Brazil national team. He is known for his defensive
              abilities, ball-winning skills, and tackling. Casemiro is widely
              regarded as one of the best defensive midfielders in the world. He
              was included in the FIFA FIFPro World XI in 2022.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Component2;
