import React, { Component } from "react";
import Header from "./Header";
import FormTop from "./FormTop";
import Middle from "./Middle";
import Footer from "./Footer";

class Question2_2a extends Component {
  render() {
    return (
      <div style={{ border: "2px solid blue" }} className="row">
        <Header />
        <FormTop />
        <Middle />
        <Footer />
      </div>
    );
  }
}

export default Question2_2a;
