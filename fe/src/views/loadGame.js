import React, { PureComponent } from "react";

import fire from "../firebase";

import { connect } from 'react-redux'
import styled from "styled-components";
import backgroundImage from "../assets/background.jpg"
import { Button, Container, Col, Row, FormGroup, Input, Card, CardTitle, CardText } from 'reactstrap';

class LoadGame extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            gameNames: [],
        };

    }

    async getUserGames() {
        var result = []
        const { currentUser } = this.props;
        const isSignedIn = Object.keys(currentUser).length === 0 && currentUser.constructor === Object;
        if (isSignedIn)
            return result;
        const userRef = fire.firestore().doc(`users/${currentUser.uid}`);
        var userData = await userRef.get();
        userData = userData.data();
        console.log(currentUser)
        console.log(userData)

        for (var key of Object.keys(userData)) {
            if (key.startsWith("game-"))
                result.push(key.replace("game-", ""));
        }

        if (JSON.stringify(result) !== JSON.stringify(this.state.gameNames)) {

            this.setState({ gameNames: result })
        }
    }

    render() {
        this.getUserGames()
        const { gameNames } = this.state;

        return (
            <BackgroundContainer>
                <CenteredContainer>
                    <InnerContainer>
                        <h2>Load Game</h2>
                        <p>Choose a game to load, if you have no saved games you can start a new game here</p>
                        <CardsContainer>
                            {gameNames.length > 0 && gameNames.map((gameName) => {
                                return (
                                    <StyledCard key={gameName}>
                                        <CardTitle tag="h5">{gameName}</CardTitle>
                                    </StyledCard>
                                )
                            })}
                        </CardsContainer>
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

const CardsContainer = styled(Container)`
    display: flex;

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

const StyledCard = styled(Card)`
    margin: 10px;
`;

const mapStateToProps = state => ({
    currentUser: state.currentUser || {}
});

export default connect(mapStateToProps)(LoadGame);