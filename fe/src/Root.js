import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./views/components/navBar";

import App from "./views/mainMenu";
import Login from "./views/login";
import SignUp from "./views/signup";
import Board from "./views/board";

import 'bootstrap/dist/css/bootstrap.min.css';

class Root extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <StyledAppWrapper>
                    <Route path="/" exact component={App} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={SignUp} />
                    <Route path="/board" exact component={Board} />
                </StyledAppWrapper>
            </BrowserRouter>
        );
    }
}

const StyledAppWrapper = styled.div`
    // -100 Accounting for header
    margin-top: -100px;
`;


export default Root;
