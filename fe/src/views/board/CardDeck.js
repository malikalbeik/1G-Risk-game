import TerritoryCard from "../board/TerritoryCard";
import WildCard from "../board/WildCard";
import {CARDS, WILDCARDS, NUMBER_OF_CARDS_IN_DECK} from "../../config/gameConstants";

class CardDeck{
    cards = [];
    noOfCards = NUMBER_OF_CARDS_IN_DECK;

    constructor(){
        for(let i = 0; i < CARDS.length; i++){
            this.cards.push(new TerritoryCard (CARDS[i].country,CARDS[i].troop));
        }

        for(let j = 0; j < WILDCARDS.length; j++){
            this.cards.push(new WildCard(WILDCARDS[j].troop1, WILDCARDS[j].troop2, WILDCARDS[j].troop3));
        }
    }

    getCards(){
        return this.cards;
    }

    shuffleCards(){
        for(let i = 0; i < this.noOfCards; i++){
            let number1 = (Math.random() * this.noOfCards);
            let number2 = (Math.random() * this.noOfCards);
            let temp = cards[number1];
            cards[number1] = cards[number2];
            cards[number2] = temp;
        }
    }

}

export default CardDeck;