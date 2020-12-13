import React, { PureComponent } from "react";
import TextBox from "../../components/TextBox/TextBox";
import Button from "../../components/Button/Button";
import "../login/style.scss";

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
          <TextBox nameClass="field" label="User Name" type="text" />
        </div>
        <div className="textfields">
          <TextBox nameClass="field" label="Password" type="password" />
        </div>
        <div>
          <Button nameClass="loginButton" content="Login" />
        </div>
      </div>
    );
  }
}

export default Login;
