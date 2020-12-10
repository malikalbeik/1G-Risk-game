class Country {
    constructor(occupingPlayerId, numOfTroops) {
        //TODO: lets have an array for the composition of army. This array should be of Troop: Infantry, Cavalry, Artillery objects.
    }

    setOccupingPlayerId(playerId) {}
    getOccupingPlayerId() {}

    setNumOfTroops(numOfTroops) {}
    getNumOfTroops() {}

    /**
     * Changes the artillery type in a country.
     * @summary Change army types between infantry, cavalry, and artillery.
     * @param {string} newTroopType - The troop type.
     * @return {boolean} True if successful, false otherwise.
     */
    changeArtilleryType(newTroopType) {}
}
