import { TROOP_TYPES } from "../../config/gameConstants";

class WildCard extends Card {

    constructor(){
        super();
        this.troop1 = TROOP_TYPES.Cavalry.name;
        this.troop2 = TROOP_TYPES.Artillery.name;
        this.troop3 = TROOP_TYPES.Infantry.name;
        this.cardType = "WildCard";
    }

    getCardType(){
        return this.cardType;
    }

    getView(){
        const Troop1 = React.createElement(Name, {children: `Country: ${this.troop1}`});
        const Troop2 = React.createElement(Name, {children: `Troop Type: ${this.troop2}`});
        const Troop3 = React.createElement(Name, {children: `Troop Type: ${this.troop3}`});

        return React.createElement(CardBorder,{children: Troop1, Troop2, Troop3});
    }
}