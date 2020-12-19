import React, { Component } from "react";
import NavBar from "./components/navBar";

// Pages
import App from "./mainMenu";
import Login from "./login";
import SignUp from "./signup";
import GameSetup from "./game-setup";
import fire from "../firebase";
import Board from "./board/Board";

import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";

// Redux Actions
import { connect } from 'react-redux'
import { setCurrentUser } from "../redux/actions"

class Router extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
        }

        this.authListener = this.authListener.bind(this);
    }

    async getUserDocument(user) {
        if (!user) return null;
        try {
            var doc = await fire.firestore().doc(`users/${user.uid}`).get()
            return {
                ...user,
                ...doc.data()
            };
        }
        catch (error) {
            console.error("Error fetching user", error);
        }

    };

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged(userAuth => {
            if (userAuth) {
                this.getUserDocument(userAuth).then(user => {
                    console.log(user);
                    this.setState({ user });
                    this.props.setCurrentUser(user)
                });
            } else {
                this.setState({ user: null });
                this.props.setCurrentUser(null);
            }
        })
    }

    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <StyledAppWrapper>
                    <Route path="/" exact component={App} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={SignUp} />
                    <Route path="/setup" exact component={GameSetup} />
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


const mapStateToProps = state => ({
    currentUser: state.currentUser || {}
});

const mapDispatchToProps = {
    setCurrentUser: setCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);