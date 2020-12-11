import React, { Component } from "react";
import "./board/style.scss";

class Button extends Component {
  render() {
    return <button className="riskButton"> {this.props.content} </button>;
  }
}

export default Button;
