import Board from "./board/Board";

class Game {
    boardInstance = Board;
    constructor() {
        return this.getInstance()
    };

    getInstance() {
        return this.boardInstance;
    };
}

export default Game;
