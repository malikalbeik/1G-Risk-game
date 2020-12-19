import React, { Component } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

class GameSetup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numOfPlayers: 2,
            numOfPlayersRecorded: false,
            players: [],
        };
    }

    render() {
        const {
            numOfPlayers,
            numOfPlayersRecorded,
            players,
        } = this.state;
        return (
            <OuterContainer>
                {!numOfPlayersRecorded ? (
                    <div>
                        <input
                            onChange={(e) =>
                                this.setState({ numOfPlayers: e.target.value })
                            }
                            value={numOfPlayers}
                            placeholder="Number of players"
                        />
                        <button onClick={this.validateInput}>Setup Game</button>
                    </div>
                ) : null}
                {numOfPlayersRecorded &&
                    players.length > 0 &&
                    players.map((player, index) => {
                        return (
                            <div key={player.id}>
                                <label>Name</label>
                                <input
                                    value={this.state.players[index]["player" + index + "Name"]}
                                    onChange={(e) => {
                                        this.state.players[index].name = e.target.value;
                                        this.setState({ players: this.state.players });
                                    }}
                                ></input>
                                <label>Color</label>
                                <input
                                    onChange={(e) => {
                                        this.state.players[index].color = e.target.value;
                                        this.setState({ players: this.state.players });
                                    }}
                                ></input>
                            </div>
                        );
                    })}
                {numOfPlayersRecorded ? <button onClick={e => {
                    e.preventDefault();
                    this.props.history.push('/board', {...this.state, initialDeployment: true});
                }}>Start Game</button> : null}
            </OuterContainer>
        );
    }

    validateInput = () => {
        const val = this.state.numOfPlayers;
        if (isNaN(val) || val < 2 || val > 5) {
            console.log("invalid input");
        } else {
            let players = [];
            for (let i = 0; i < val; i++) {
                players.push({ id: uuidv4(), playerTurnNumber: i, reservePersonel: 23 // 50 - (5 * val) 
                });
            }
            this.setState({ numOfPlayersRecorded: true, players});
        }
    };
}

const OuterContainer = styled.div`
    padding-top: 125px;
`;

export default GameSetup;
