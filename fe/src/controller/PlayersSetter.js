// Libraries
const { uuid } = require("uuidv4");

// Game Objects
const Dice = require("./Dice");
const Player = require("./Player");

class PlayersSetter {
    constructor(numOfPlayers, playerNames, playerColors) {
        this.numOfPlayers = numOfPlayers;
        this.playerNames = playerNames;
        this.playerColors = playerColors;
        this.players = [];
        this.maxDiceRolledPlayer = "";
        this.maxDiceRoll = undefined;
    }

    setupPlayers() {
        // Calculate
        const NUMBER_OF_TROOPS_PER_PLAYER = 50 - 5 * this.numOfPlayers;

        // Initially 1 dice is needed
        const dice = new Dice(1);

        // Create players
        for (let i = 0; i < this.numOfPlayers; i++) {
            this.players.push(
                new Player(
                    uuid(),
                    this.playerNames[i],
                    this.playerColors[i],
                    dice.roll(1)[0]
                )
            );
        }

        this.getPlayerWhoBegins();
    }

    createPlayers() {
        
    }

    getPlayerWhoBegins() {
        // Decide which player begins
        let maxPlayerId = this.players[0].getId();
        let maxDiceRoll = this.players[0].getDiceRoll();
        for (let i = 1; i < this.numOfPlayers; i++) {
            if (maxDiceRoll < this.players[i].getDiceRoll()) {
                maxDiceRoll = this.players[i].getDiceRoll();
                maxPlayerId = this.players[i].getId();
            }
        }
        this.maxDiceRolledPlayer = maxPlayerId;
        this.maxDiceRoll = maxDiceRoll;
    }

    getPlayers() {
        return this.players;
    }

    getMaxDiceRolledPlayer() {
        return this.maxDiceRolledPlayer;
    }

    getMaxDiceRoll() {
        return this.maxDiceRoll;
    }
}

module.exports = PlayersSetter;
