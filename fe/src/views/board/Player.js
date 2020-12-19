import React from "react";
import styled from "styled-components";
import {
    BREAKPOINTS,
    CARD_TYPES,
    NUMBER_OF_CARDS_FOR_TRADE,
} from "../../config/gameConstants";

class Player {
    constructor(name, id, remainingTroops, color, isPlayerTurn, turnNumber) {
        this.name = name;
        this.id = id;
        this.remainingTroops = remainingTroops;
        this.color = color;
        this.isPlayerTurn = isPlayerTurn;
        this.turnNumber = turnNumber;
        this.diceRoll = null;
    }

    getName() {
        return this.name;
    }
    getTurnNumber() {
        return this.turnNumber;
    }

    setDiceRoll(numOfPlayers) {
        this.diceRoll = Math.floor(Math.random() * 7);
    }
    getDiceRoll() {
        return this.diceRoll;
    }

    getTurnNumber() {
        return this.turnNumber;
    }

    getRemainingTroops() {
        return this.remainingTroops;
    }

    setRemainingTroops(remainingTroops) {
        if (remainingTroops >= 0) {
            this.remainingTroops = remainingTroops;
            return true;
        }
        return false;
    }

    getIsPlayerTurn() {
        return this.isPlayerTurn;
    }

    setIsPlayerTurn(playerTurn) {
        this.isPlayerTurn = playerTurn;
    }

    getColor() {
        return this.color;
    }

    getNoOfCards() {
        return this.noOfCards;
    }

    rollDiceBasedOnTroops(numOfTroops) {
        // try {
        //     troopCount = parseInt(numOfTroops);
        // } catch (e) {
        //     console.log(e);
        //     return [];
        // }

        let diceRolls = [];
        if (numOfTroops >= 3) {
            diceRolls = new Array(3);
        } else {
            diceRolls = new Array(numOfTroops);
        }
        const numOfRolls = diceRolls.length;
        for (let i = 0; i < numOfRolls; i++) {
            diceRolls[i] = Math.floor(Math.random() * 7);
        }
        return diceRolls.sort((a, b) => b - a);
    }

    getView() {
        const PlayerName = React.createElement(Name, {
            children: this.name,
        });
        const PlayerTroops = React.createElement(Reserved, {
            children: `Troops: ${this.remainingTroops}`,
        });
        return React.createElement(
            CardBorder,
            {
                style: { border: this.isPlayerTurn ? "1px solid black" : "" },
                key: this.id,
            },
            PlayerName,
            PlayerTroops
        );
    }

    getView() {
        const PlayerName = React.createElement(Name, {
            children: this.name,
        });
        const PlayerTroops = React.createElement(Reserved, {
            children: `Troops: ${this.remainingTroops}`,
        });
        return React.createElement(
            CardBorder,
            {
                style: {
                    border: `${this.isPlayerTurn ? "1px solid black" : ""}`,
                },
                key: this.id,
            },
            PlayerName,
            PlayerTroops
        );
    }
}

const CardBorder = styled.div`
    width: 100%;
    height: 12%;
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
export default Player;
