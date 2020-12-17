import React, { Component } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

import Map from "./map/Map";
import { BREAKPOINTS, COUNTRIES } from "../../config/gameConstants";
import Player from "./Player";

class Board extends Component {
    countryIds = Object.values(COUNTRIES).map((country) => country.value);
    map = new Map();
    allPlayers = [];
    constructor(props) {
        super(props);

        this.state = {
            players: [],
            currentPlayerTurn: 0,
            selectedCountryId: "",
            initialTroopsDeployed: false,
        };
        this.initializePlayers();
        this.allPlayers[this.state.currentPlayerTurn].setIsPlayerTurn(true);
    }

    initializePlayers = () => {
        const { players } = this.props.history.location.state;
        for (let i = 0; i < players.length; i++) {
            this.allPlayers.push(new Player(players[i].name, players[i].id, players[i].reservePersonel, players[i].color, false, players[i].playerTurnNumber))
        }
    }

    componentDidMount() {
        document.addEventListener("click", this.getClickedCountry);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.getClickedCountry);
    }

    getClickedCountry = (e) => {
        const { selectSecondCountry, selectedCountryId } = this.state;

        if (!selectSecondCountry && this.countryIds.includes(e.target.id)) {
            this.setState({ selectedCountryId: e.target.id });
        }
        if (
            selectSecondCountry &&
            this.countryIds.includes(e.target.id) &&
            e.target.id !== selectedCountryId
        ) {
            this.setState({ countryToAttackId: e.target.id });
        }
    };

    render() {
        const { currentPlayerTurn, selectedCountryId } = this.state;
        return (
            <BoardContainer>
                <InnerContainer>
                    <Title>Players</Title>
                    {this.allPlayers.map(player => player.getView())}
                    <StyledButton
                        onClick={() => {
                            this.setState({
                                currentPlayerTurn:
                                    (currentPlayerTurn + 1) % this.allPlayers.length,
                                selectedCountryId: "",
                            });
                        }}
                    >
                        End Turn
                    </StyledButton>
                </InnerContainer>
                {this.map.getView()}
                <InnerContainer>
                    <Name>
                        Country Selected:
                        <br />
                        {selectedCountryId
                            .replace(/ /g, "_")
                            .toUpperCase()}{" "}
                    </Name>
                    <StyledButton
                        onClick={() => {
                            this.deployInitialTroop();
                        }}
                    >
                        Deploy
                    </StyledButton>
                </InnerContainer>
            </BoardContainer>
        );
    }

    deployInitialTroop = () => {
        const {
            currentPlayerTurn,
            selectedCountryId,
        } = this.state;
        if (this.map.deployInitialTroop(selectedCountryId, this.allPlayers[currentPlayerTurn], 1)) {
            console.log(currentPlayerTurn);
            if (currentPlayerTurn === 0) {
                this.allPlayers[currentPlayerTurn].setIsPlayerTurn(true);
                this.allPlayers[this.allPlayers.length - 1].setIsPlayerTurn(false);
            } else {
                this.allPlayers[currentPlayerTurn].setIsPlayerTurn(true);
                this.allPlayers[currentPlayerTurn - 1].setIsPlayerTurn(false);
            }
            this.forceUpdate();

            this.setState({ currentPlayerTurn: (currentPlayerTurn + 1) % this.allPlayers.length }, () => {
                
            })
            this.forceUpdate();

        }
        let playerHasTroops = true;
        for (let i = 0; i < this.allPlayers.length; i++) {
            if (this.allPlayers[i].getRemainingTroops() === 0) {
                playerHasTroops = false;
                break;
            }
        }
        this.setState({ initialTroopsDeployed: !playerHasTroops });
        this.forceUpdate();
    };
}

const BoardContainer = styled.div`
    padding-top: 125px;
    display: flex;
    background-color: #88b6da;
    height: 100vh;
`;

const InnerContainer = styled.div`
    width: 20%;
    height: 70%;
    margin-left: 2%;
    margin-right: 2%;
    padding: 25px;
    border-radius: 25px;
    background-color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media (${BREAKPOINTS.sm}) {
        width: 50%;
        height: 40%;
    }
`;

const CardBorder = styled.div`
    width: 100%;
    height: 30%;
    margin-left: 2%;
    margin-right: 2%;

    border-radius: 25px;
    background-color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media (${BREAKPOINTS.sm}) {
        width: 100%;
        height: 30%;
    }
`;

const StyledButton = styled(Button)`
    width: 90%;
    margin: 10% 0 0 0;
    font-size: large;
    font-weight: bold;
    background-color: #1d65a8;
    color: white;

    :hover {
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.24);
    }

    :active {
        transform: translateY(2px);
    }

    @media (${BREAKPOINTS.md}) {
        width: 80%;
    }

    @media (${BREAKPOINTS.sm}) {
        font-size: 50%;
        width: 100%;
    }
`;

const Title = styled.h4`
    font-size: 180%;
    text-align: center;
    margin: 0 0 10% 0;
    @media (${BREAKPOINTS.sm}) {
        font-size: 100%;
        margin: 0 0 2px 0;
        text-align: center;
    }
`;

const Name = styled.h5`
    font-size: 140%;
    text-align: center;
    margin: 0 0 10% 0;
    @media (${BREAKPOINTS.sm}) {
        font-size: 100%;
        margin: 0 0 2px 0;
        text-align: center;
    }
`;

const Reserved = styled.h6`
    font-size: 100%;
    text-align: center;
    color: #606060;
    @media (${BREAKPOINTS.sm}) {
        font-size: 80%;
        text-align: center;
    }
`;

export default Board;
