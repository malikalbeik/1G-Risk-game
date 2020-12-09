import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./containers/App";
import Login from "./views/login";
import SignUp from "./views/signup";
import Board from "./views/board";

import "bootstrap-4-grid/css/grid.min.css";
import "./index.scss";

class Root extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={App} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/signup" exact component={SignUp} />
                        <Route path="/board" exact component={Board} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Root;
