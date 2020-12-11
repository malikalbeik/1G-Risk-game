import React, { Component } from "react";
import "../components/style.scss";

class Button extends Component {
  render() {
    return <button className="loginButton"> {this.props.content} </button>;
  }
}

export default Button;
