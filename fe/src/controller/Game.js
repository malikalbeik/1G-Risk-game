const PlayersSetter = require('./PlayersSetter');


class Game {
    startGame() {
        // Get the following from UI
        const NUMBER_OF_PLAYERS = 3;
        const PLAYER_NAMES = ["Osama", "Mannan", "Adeem"];
        const PLAYER_COLORS = ["RED", "GREEN", "ORANGE"];

        // Player Setup
        const playerSetter = new PlayersSetter(NUMBER_OF_PLAYERS, PLAYER_NAMES, PLAYER_COLORS);
        playerSetter.setupPlayers();
        //TODO: remove later
        console.log(playerSetter.getPlayers());
        console.log(playerSetter.getMaxDiceRoll());
        console.log(playerSetter.getMaxDiceRolledPlayer());

        return true;
    }
}

const gameController = new Game();
gameController.startGame();

export default gameController;