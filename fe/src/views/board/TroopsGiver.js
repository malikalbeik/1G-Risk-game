class TroopsGiver {
    constructor(countries) {
        this.countries = countries;
    }

    giveTroopsToPlayer(player) {
        const deployableTroops = Math.floor(this.getNumberOfCountryOccupiedByPlayer(player.id) / 3);
        return player.setRemainingTroops(deployableTroops);
    }

    getNumberOfCountryOccupiedByPlayer(playerId) {
        let numOfTerritories = 0;
        for (let i = 0; i < this.countries.length; i++) {
            if (this.countries[i].getOccupyingPlayerId() === playerId) {
                numOfTerritories++;
            }
        }
        return numOfTerritories;
    }
}

export default TroopsGiver;