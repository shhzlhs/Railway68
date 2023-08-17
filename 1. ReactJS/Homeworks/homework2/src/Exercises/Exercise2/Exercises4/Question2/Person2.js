import React, { Component } from "react";

class Person2 extends Component {
  render() {
    let { name, age, slogan } = this.props;
    let yearOfBirth = new Date().getFullYear() - age;
    if (slogan == null) {
      slogan = "Không có lý tưởng sống";
    }
    return (
      <div
        style={{ border: "solid 1px black" }}
        className="col-xs-4 col-sm-4 col-md-4 col-lg-4"
      >
        <h3>Full Name: {name}</h3>
        <p>Age: {age}</p>
        <p>Year of birth: {yearOfBirth}</p>
        <p>Slogan: {slogan}</p>
      </div>
    );
  }
}
export default Person2;
