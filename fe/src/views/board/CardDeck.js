import TerritoryCard from "../board/TerritoryCard";
import WildCard from "../board/WildCard";
import {CARDS} from "../../config/gameConstants";

class CardDeck{
    cards = [];

    constructor(){
        for(let i = 0; i < CARDS.length; i++){
            this.cards.push(new TerritoryCard (CARDS[i].country,CARDS[i].troop));
        }
        this.cards.push(new WildCard());
        this.cards.push(new WildCard());
    }

    getCards(){
        return this.cards;
    }

    shuffleCards(){
        for(let i = 0; i < this.cards.length; i++){
            let number = (Math.random() * this.cards.length);
            let temp = cards[i];
            cards[i] = cards[number];
            cards[number] = temp;
        }
    }

}