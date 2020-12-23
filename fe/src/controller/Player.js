class Player {
    constructor(id, name, color, diceRoll) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.diceRoll = diceRoll;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    getDiceRoll() {
        return this.diceRoll;
    }

    setDiceRoll(diceRoll) {
        this.diceRoll = diceRoll;
    }
}

module.exports = Player;
