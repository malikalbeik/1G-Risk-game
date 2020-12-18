import TerritoryCard from "./TerritoryCard";
import WildCard from "./WildCard";
import {
  CARDS,
  WILDCARDS,
  NUMBER_OF_CARDS_IN_DECK,
} from "../../config/gameConstants";

class CardDeck {
  cards = [];
  noOfCards = NUMBER_OF_CARDS_IN_DECK;

  constructor() {
    for (let i = 0; i < CARDS.length; i++) {
      this.cards.push(new TerritoryCard(CARDS[i].country, CARDS[i].troop));
    }

    for (let j = 0; j < WILDCARDS.length; j++) {
      this.cards.push(
        new WildCard(
          WILDCARDS[j].troop1,
          WILDCARDS[j].troop2,
          WILDCARDS[j].troop3
        )
      );
    }
  }

  getCard() {
    if (this.noOfCards > 0) {
      var card = this.cards.shift();
      this.noOfCards--;
      console.log("Card received no: " + this.noOfCards + "\n");
      return card;
    } else {
      console.log("No Cards left");
    }
  }

  shuffleCards() {
    for (let i = 0; i < this.noOfCards; i++) {
      let number1 = Math.floor(Math.random() * this.noOfCards);
      let number2 = Math.floor(Math.random() * this.noOfCards);
      let temp = this.cards[number1];
      this.cards[number1] = this.cards[number2];
      this.cards[number2] = temp;
    }
    console.log("Cards Shuffled ");
  }
}

export default CardDeck;
