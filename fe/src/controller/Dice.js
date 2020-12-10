/**
 * The dice class allows you to create multiple dice. It allows getting multiple dice rolls.
 */
class Dice {
    constructor(numOfDice) {
        this.numOfDice = numOfDice;
    }

    /**
     * Rolls dice randomly. The number on the dice should be from 1-6 inclusive.
     * @summary Simulates the rolling of dice.
     * @param {number} numOfDiceToRoll - The number of dices to roll. By default, the number is the maximum number of dices.
     * @return {int[]} diceRollResults - The results of the dice rolled in an array. Array length is the number of dice rolled.
     */
    roll(numOfDiceToRoll = this.numOfDice) {
        if (numOfDiceToRoll <= 0) {
            return [];
        }
        
        let results = [];
        for (let i = 0; i < numOfDiceToRoll; i++) {
            results.push(Math.round(Math.random() * 6))
        }
        return results;
    }

    /**
     * Set the number of dice.
     * @summary The nunber of dice required.
     * @param {number} numOfDice - The number of dice.
     */
    setNumOfDice(numOfDice) {}

    /**
     * Gives the number of dice.
     * @summary Gives the number of dice that are in the class.
     * @return {number} The number of dice.
     */
    getNumOfDice() {}
};

module.exports = Dice;
