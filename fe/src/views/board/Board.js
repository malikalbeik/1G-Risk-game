import React, { Component } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

import Map from "./map/Map";
import { BREAKPOINTS, COUNTRIES } from "../../config/gameConstants";
import Player from "./Player";
import PlayerTurnDecider from "./PlayerTurnDecider";
import TroopsGiver from "./TroopsGiver";

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [],
            selectedCountryId: "",
            initialSetupPhase: true,
            turnsPhase: false,
            playerWantsToAttack: false,
            attackerWon: false,
            numOfTroopsToAttackWith: 0,
            numOfTroopsToDefendWith: 0,
        };
        this.allPlayers = [];
        this.initializePlayers();
        this.map = new Map(this.allPlayers);
        this.countryIds = Object.values(COUNTRIES).map(
            (country) => country.value
        );
        this.playerTurnDecider = new PlayerTurnDecider(this.allPlayers);
        this.allPlayers[0].setIsPlayerTurn(true);
        this.troopsGiver = new TroopsGiver(this.map.getCountries());
    }

    componentDidMount() {
        document.addEventListener("click", this.onClickListener);
        document.addEventListener("dblclick", this.onDoubleClickListener);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.onClickListener);
        document.removeEventListener("dblclick", this.onDoubleClickListener);
    }

    initializePlayers = () => {
        const { players } = this.props.history.location.state;
        for (let i = 0; i < players.length; i++) {
            this.allPlayers.push(
                new Player(
                    players[i].name,
                    players[i].id,
                    players[i].reservePersonel,
                    players[i].color,
                    false,
                    players[i].playerTurnNumber,
                    0,
                    this.trader
                )
            );
        }
    };

    render() {
        const {
            turnsPhase,
            selectedCountryId,
            initialSetupPhase,
            playerWantsToAttack,
            attackerWon,
        } = this.state;
        return (
            <BoardContainer>
                <InnerContainer>
                    <Title>Players</Title>
                    {this.allPlayers.map((player) => player.getView())}
                    {turnsPhase ? (
                        <StyledButton
                            onClick={() => {
                                this.playerTurnDecider.endTurnForPlayer();
                                this.setState({ playerWantsToAttack: false });
                                this.forceUpdate();
                            }}
                        >
                            End Turn
                        </StyledButton>
                    ) : null}
                </InnerContainer>
                {this.map.getView()}
                <InnerContainer>
                    <Name>
                        Country Selected:
                        <br />
                        {selectedCountryId.replace(/ /g, "_").toUpperCase()}
                    </Name>
                    {initialSetupPhase ? (
                        <StyledButton onClick={this.deployOneTroop}>
                            Deploy 1 Troop
                        </StyledButton>
                    ) : null}
                    {turnsPhase ? (
                        <>
                            <StyledButton onClick={this.deployTurnTroops}>
                                Deploy 1 Troop (Turn)
                            </StyledButton>
                            <StyledButton
                                onClick={() =>
                                    this.setState({ playerWantsToAttack: true })
                                }
                            >
                                Choose 2nd Country (Turn)
                            </StyledButton>
                            {playerWantsToAttack ? (
                                <>
                                    <StyledButton onClick={this.attackCountry}>
                                        Attack
                                    </StyledButton>
                                    <input
                                        value={
                                            this.state.numOfTroopsToAttackWith
                                        }
                                        placeholder="troops to attack with"
                                        onChange={(e) =>
                                            this.setState({
                                                numOfTroopsToAttackWith: parseInt(
                                                    e.target.value
                                                ),
                                            })
                                        }
                                    ></input>
                                    <input
                                        value={
                                            this.state.numOfTroopsToDefendWith
                                        }
                                        placeholder="troops to defend with"
                                        onChange={(e) =>
                                            this.setState({
                                                numOfTroopsToDefendWith: parseInt(
                                                    e.target.value
                                                ),
                                            })
                                        }
                                    ></input>
                                </>
                            ) : null}
                        </>
                    ) : null}
                    {this.state.attackStarted ? (
                        <Name>{`${attackerWon ? "Attacker" : "Defender"
                            } Won`}</Name>
                    ) : null}
                </InnerContainer>
            </BoardContainer>
        );
    }

    attackCountry = () => {
        const {
            selectedCountryId,
            countryToAttackId,
            numOfTroopsToAttackWith,
            numOfTroopsToDefendWith,
        } = this.state;
        this.setState({ attackStarted: true });
        if (
            this.map.attackTerritory(
                selectedCountryId,
                countryToAttackId,
                numOfTroopsToAttackWith,
                numOfTroopsToDefendWith
            )
        ) {
            this.setState({ attackerWon: true, maneuveringPhase: true });
        } else {
            this.setState({ attackerWon: false, maneuveringPhase: true });
        }
        this.forceUpdate();
    };

    deployTurnTroops = () => {
        const { selectedCountryId, playerWantsToAttack } = this.state;
        if (
            this.map.deployTroop(
                selectedCountryId,
                this.playerTurnDecider.getPlayerWithTurn(),
                1
            )
        ) {
            this.forceUpdate();
        }
        if (
            this.playerTurnDecider
                .getCurrentPlayerInfo()
                .getRemainingTroops() === 0
        ) {
            // time to attack or skip
            //TODO: Transition turn to next player
            // this.playerTurnDecider.endTurnForPlayer();
            // this.troopsGiver.giveTroopsToPlayer(this.playerTurnDecider.getCurrentPlayerInfo());
            // this.setState({ playerDeployedGivenTroops: true });
        }
    };

    deployOneTroop = () => {
        const { selectedCountryId } = this.state;


        if (
            this.map.deployTroop(
                selectedCountryId,
                this.playerTurnDecider.getPlayerWithTurn(),
                1
            )
        ) {
            this.playerTurnDecider.endTurnForPlayer();
            if (this.map.areInitialTroopsDeployed()) {
                const currentPlayer = this.playerTurnDecider.getPlayerWithTurn();
                // const currentPlayer = this.allPlayers[0];
                this.troopsGiver.giveTroopsToPlayer(currentPlayer);
                this.setState({ initialSetupPhase: false, turnsPhase: true });
            }


            this.forceUpdate();
        }


    };

    initializePlayers = () => {
        const { players } = this.props.history.location.state;
        for (let i = 0; i < players.length; i++) {
            let player = new Player(
                players[i].name,
                players[i].id,
                players[i].reservePersonel,
                players[i].color,
                false,
                players[i].playerTurnNumber
            );
            player.setDiceRoll(players.length);
            this.allPlayers.push(player);
        }
        this.allPlayers = this.allPlayers.sort(
            (a, b) => b.getDiceRoll() - a.getDiceRoll()
        );
    };

    onClickListener = (e) => {
        const { playerWantsToAttack, selectedCountryId } = this.state;

        if (!playerWantsToAttack && this.countryIds.includes(e.target.id)) {
            this.setState({ selectedCountryId: e.target.id });
        }
        if (
            playerWantsToAttack &&
            this.countryIds.includes(e.target.id) &&
            e.target.id !== selectedCountryId
        ) {
            this.setState({ countryToAttackId: e.target.id });
        }
    };

    onDoubleClickListener = (e) => {
        const { selectedCountryId, initialSetupPhase, turnsPhase } = this.state;
        const isCountryValid = this.countryIds.includes(e.target.id);
        if (initialSetupPhase && selectedCountryId && isCountryValid) {
            this.deployOneTroop();
        }
        if (turnsPhase && isCountryValid) {
            this.deployTurnTroops();
        }
    };
}

const BoardContainer = styled.div`
    padding-top: 125px;
    display: flex;
    background-color: #88b6da;
    height: 100vh;
`;

const InnerContainer = styled.div`
    width: 80%;
    height: 100%;
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

const StyledButton = styled(Button)`
    width: 90%;
    margin: 10% 0 0 0;
    font-size: 90%;
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

export default Board;
