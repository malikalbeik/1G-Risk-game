import React, { PureComponent } from "react";

import fire from "../firebase";

import styled from "styled-components";
import backgroundImage from "../assets/background.jpg"
import { Button, Container, Col, Row, Form, FormGroup, Input } from 'reactstrap';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.verifyUser = this.verifyUser.bind(this);
  }

  verifyUser(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("you are successfully loged in")
        this.props.history.push('/')
      })
      .catch(err => {
        console.log("Error: " + err.toString());
      })
  }

  render() {

    return (
      <BackgroundContainer>
        <CenteredContainer>
          <InnerContainer>
            <h2>Sign In</h2>
            <Form onSubmit={this.verifyUser}>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Input type="email" name="email" placeholder="Email" />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Input type="password" name="password" placeholder="password" />
                  </FormGroup>
                </Col>
              </Row>
              <StyledButton>Sign in</StyledButton>
            </Form>
          </InnerContainer>
        </CenteredContainer>
      </BackgroundContainer >
    );
  }
}

const BackgroundContainer = styled.div`
  background-image: url(${backgroundImage});
  height: calc(100% - 100px);
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CenteredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

const InnerContainer = styled(Container)`
  width: 60%;
  padding: 25px;
  border-radius: 25px;
  background-color: white;
`;


const StyledButton = styled(Button)`
  padding: 10px 50px;
  font-size: large;
  font-weight: bold;
  background-color: #1d65a8;
  color: white;

  :hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.24)
  }

  :active {
    transform: translateY(2px);
  }
`;

export default Login;