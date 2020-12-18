import { CARD_TYPES } from "../../config/gameConstants";

class WildCard extends Card {

    constructor(troop1, troop2, troop3){
        super();
        this.troop1 = troop1;
        this.troop2 = troop2;
        this.troop3 = troop3;
        this.cardType = CARD_TYPES.WildType.type;
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

export default WildCard;