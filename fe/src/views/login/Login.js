import React, { PureComponent } from "react";
import TextBox from "../../components/TextBox";
import Button from "../../components/Button";

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
          <Button content="Login" />
        </div>
      </div>
    );
  }
}

export default Login;
