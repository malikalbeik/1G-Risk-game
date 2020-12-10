import React, { PureComponent } from "react";
import TextBox from "../TextBox";
import Button from "../Button";

class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="riskBack">
        <div className="title"> Login </div>
        <div className="textfields">
          {" "}
          <TextBox label="User Name" type="text" />{" "}
        </div>
        <div className="textfields">
          {" "}
          <TextBox label="Password" type="password" />{" "}
        </div>
        <div>
          {" "}
          <Button variant="primary" size="lg" content="Login" />
        </div>
      </div>
    );
  }
}

export default Login;
