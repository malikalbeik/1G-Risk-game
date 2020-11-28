/**
* Risk Card that represents 1 card with a territory name and a troop name.
*/
class Card {
    constructor(territoryName, troopName) {
        this.territoryName = territoryName;
        this.troopName = troopName;
    }

    setTerritoryName(territoryName) {};
    getTerritoryName(){}

    setTroopName(troopName) {};
    getTroopName(troopName) {};

};

export default Card;