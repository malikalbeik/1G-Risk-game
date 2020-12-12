import React, { Component } from "react";
import "../TextBox/style.scss";

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    return (
      <div className= {this.props.nameClass}>
        <input
          placeholder={this.props.label}
          type={this.props.type}
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <label> {this.props.label} </label>
      </div>
    );
  }
}

export default TextBox;
