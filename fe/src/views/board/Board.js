import React, { Component } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

import Map from "./map/Map";
import { BREAKPOINTS, COUNTRIES } from "../../config/gameConstants";
import Player from "./Player";
import PlayerTurnDecider from "./PlayerTurnDecider";
import TroopsGiver from "./TroopsGiver";

class Board extends Component {
    timer = undefined;
    delay = 200;
    prevent = false;

    constructor(props) {
        super(props);

        this.state = {
            players: [],
            selectedCountryId: "",
            initialSetupPhase: true,
            // turnsPhase: false,
            // playerWantsToAttack: false,
            // attackerWon: false,
            numOfAttackerTroops: 0,
            numOfDefenderTroops: 0,
            numOfTroopsToMove: 0,
            attackOrSkipTurnPhase: false,
            attackState: false,
            maneuverState: false,
            validity: false,
            // countryToAttackOrManeuverTo: ''
            
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
                )
            );
        }
    };

    render() {
        const {
            attackState,
            maneuverState,
            validity,
            selectedCountryId,
        } = this.state;
    
        return (
            <BoardContainer>
                <InnerContainer>
                    {this.allPlayers.map((player) => player.getView())}
                </InnerContainer>
                <MapContainer>
                    {this.map.getView()}
                    {selectedCountryId ? <span>{COUNTRIES[selectedCountryId].name} </span> : null}
                    {attackState? 
                        <>
                            <input 
                                value={this.state.numOfAttackerTroops} 
                                onChange={e => this.setState({ numOfAttackerTroops: e.target.value })}
                            />
                            <input 
                                value={this.state.numOfDefenderTroops} 
                                onChange={e => this.setState({ numOfDefenderTroops: e.target.value })}
                            />
                        </>
                        : null}
                    {maneuverState? <input 
                        value={this.state.numOfAttackerTroops} 
                        onChange={e => this.setState({ numOfAttackerTroops: e.target.value })}/> : null}
                </MapContainer>
            </BoardContainer>
        );
    }
    
    deployTurnTroops = () => {
        const { selectedCountryId, playerWantsToAttack } = this.state;
        if (this.map.deployTroop(selectedCountryId, this.playerTurnDecider.getPlayerWithTurn(), 1)) {
            this.forceUpdate();
        }
        if (this.playerTurnDecider.getCurrentPlayerInfo().getRemainingTroops() === 0) {
            // this.map.resetCountryState();
            this.forceUpdate();
            this.setState({ turnsPhase: false, attackOrSkipTurnPhase: true,  countryToAttackOrManeuverTo: '' });
        }
    };

    deployInitialTroops = () => {
        const { selectedCountryId } = this.state;
        if (this.map.deployTroop(selectedCountryId, this.playerTurnDecider.getPlayerWithTurn(), 1)) {
            this.playerTurnDecider.endTurnForPlayer();
            if (!this.map.doPlayersHaveTroops()) {
                const currentPlayer = this.playerTurnDecider.getPlayerWithTurn();
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
        this.timer = setTimeout(() => {
            if (!this.prevent) {
                this.doClickAction(e);
            }
            this.prevent = false;
          }, this.delay);
    };

    onDoubleClickListener = (e) => {
        clearTimeout(this.timer);
        this.prevent = true;
        this.doDoubleClickAction(e);  
    };

    doClickAction = (e) => {
        const id = e.target.id;
        const isCountryValid = this.countryIds.includes(id);
        if (isCountryValid) {
            this.setState({ selectedCountryId: id });
            this.map.setSelectedCountry(id);
            this.forceUpdate();
        } else {
            this.setState({ selectedCountryId: '' });
            this.map.resetCountryState();
            this.forceUpdate();
        }
    }

    doDoubleClickAction = (e) => {
        const { selectedCountryId, initialSetupPhase, turnsPhase, attackOrSkipTurnPhase } = this.state;
        const id = e.target.id;
        const isCountryValid = this.countryIds.includes(id);
        
        // Allow initial deployment with double click
        if (initialSetupPhase && isCountryValid) {
            this.setState({ selectedCountryId: id });
            this.map.setSelectedCountry(id);
            this.deployInitialTroops();
            this.forceUpdate();
            return;
        }

        // Allow turn troops deployment
        if (turnsPhase && isCountryValid) {
            this.setState({ selectedCountryId: id }, () => {
                this.map.setSelectedCountry(id);
                this.deployTurnTroops();
            });
            this.forceUpdate();
            return;
        }

        // Allow selecting another country, attacing and manevering
        if (attackOrSkipTurnPhase && isCountryValid) {
            this.setState({ countryToAttackOrManeuverTo: id }, () => {
                const result = this.map.validateInitialMove(this.state.selectedCountryId, this.state.countryToAttackOrManeuverTo, this.playerTurnDecider.getCurrentPlayerInfo());
                this.setState({
                    attackState: result === "ATTACK",
                    maneuverState: result === "MANEUVER",
                    validity: result ? true : false
                });
            });
            this.forceUpdate();
        }
    }

    validateInput = (e, inputType) => {
        if (e.t)
        this.setState({ 
            [inputType]: e.target.value 
        })
    }
}

const MapContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    span {
        padding-top: 5px;
        font-size: xxx-large;
    }
`;

const BoardContainer = styled.div`
    padding-top: 125px;
    display: flex;
    flex-direction: column;
    background-color: #88b6da;
    height: 100vh;
`;
// width: 80%;
//     height: 100%;
//     margin-left: 2%;
//     margin-right: 2%;
//     padding: 25px;
//     border-radius: 25px;
//     background-color: white;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     @media (${BREAKPOINTS.sm}) {
//         width: 50%;
//         height: 40%;
//     }
const InnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 18px;
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
