import { CARDS } from "../config/gameConstants";
import Card from "./Card";

class CardDeck {
    constructor() {
        this.cards = CARDS.map((card) => {
            return new Card(card.country, card.troop);
        });
    }

    getCards() {}

    setCards(cards) {}

    /**
     * Imitates the shuffling of risk cards and returns the .
     * @summary Shuffles the deck of risk cards.
     * @return {Card[]} The shuffled cards array.
     */
    shuffleCards() {}
}

export default CardDeck;
