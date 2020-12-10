/**
* Risk Card that represents 1 card with a territory name and a troop name.
*/
class Card {
    constructor(country, troop) {
        this.country = country;
        this.troop = troop;
    }

    setCountry(country) {};
    getTerritoryName(){};

    setTroop(troop) {};
    getTroop(troop) {};

};

export default Card;