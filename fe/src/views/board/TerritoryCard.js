class TerritoryCard extends Card {
    
    constructor(territoryName, infantaryName){
        super(territoryName, infantaryName);
        this.cardType = "territory";
    }

    getCardType(){
        return this.cardType;
    }

    getView(){
        const Country = React.createElement(Name, {children: `Country: ${this.territoryName}`});
        const Troop = React.createElement(Name, {children: `Troop Type: ${this.infantaryType}`});

        return React.createElement(CardBorder,{children: Country, Troop});
    }
}