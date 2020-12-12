import React, { Component } from "react";
import "../Button/style.scss";

class Button extends Component {
  render() {
    return (
      <button className={this.props.nameClass}> {this.props.content} </button>
    );
  }
}

export default Button;
