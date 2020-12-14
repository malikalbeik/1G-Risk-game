class TroopsDeployer {
    /**
     * Initialize the TroopsDeployer.
     * @summary Constructor for the class.
     * @param {Player[]} playerIds - All the ids of the players.
     * @param {number} numOfDeployableTroops - The number of troops that can be deployed.
     * @param {Country[]} deployableCountries - The countries that troops can be deployed to.
     */
    constructor(playerIds, numOfDeployableTroops, deployableCountries) {
        //TODO: TroopsDeployer has to keep track of all the players' troop at all times. Give the initial number of troops, and change as per need.
        //TODO: Lets use the array index of playerIds and deployableCountries to create a correspondence. The 0th position in playerIds corresponds to the 0th player deployable countries in deployableCountries.
        //TODO: Also, lets keep track of the number of troops per player using an array whose position has the same correspondence as mentioned above.
    }

    getPlayerIds() {}

    getNumOfDeployableTroops() {}

    /**
     * Sets the number of troops for a player.
     * @summary Equivalent to setting the total number of troops for a player.
     * @param {string} playerId - The player id of the player whose troops have to be set.
     * @param {number} numOfDeployableTroops - The number of troops for the player.
     * @return {boolean} True if successful, false otherwise.
     */
    setNumOfDeployableTroops(playerId, numOfDeployableTroops) {}

    getDeployableCountries() {}

    /**
     * Sets the deployable countries for a player.
     * @summary Use this to set deployable troops for .
     * @param {string} playerId - The player id whose deployable countries have to be changed.
     * @param {Country[]} deployableCountries - Countries player is allowed to deploy to.
     * @return {boolean} True if successful, false otherwise.
     */
    setDeployableCountries(playerId, deployableCountries) {}

    /**
     * Adds troops to a country.
     * @param {string} countryName - Name of the country to add to.
     * @param {number} troopCount - Number of troops to add.
     * @return {boolean} True if successful, false otherwise.
     */
    addTroopToCountry(countryName, troopCount) {}

    /**
     * Maneuvers troops to another country for a player.
     * @param {string} playerId - Player whose troops have to be moved.
     * @param {string} leavingCountry - The country being left.
     * @param {string} destination - The country being moved to.
     * @param {number} numOfTroops - The number of troops to move.
     * @return {boolean} True if successful, false otherwise.
     */
    moveTroopsToAnotherCountry(playerId, leavingCountry, destination, numOfTroops) {}

    /**
     * Change the type of artillery according to their respective space.
     * @summary Infantry, Cavalry, Infantry switiching.
     * @param {string} playerId - player id of the player whose troops are to be changed.
     * @param {string} countryName - country in which the troop types have to be changed.
     * @return {boolean} True if successful, false otherwise.
     */
    changeArtilleyType(playerId, countryName) {}

    /**
     * Adds to the number of troops.
     * @summary For events when a card is traded or a continent is occupied.
     * @param {string} playerId - player's id whose number of troops have to be updated.
     * @param {number} numOfTroopsToAdd - number of troops to add to the player.
     * @return {boolean} True if successful, false otherwise.
     */
    addDeployableTroops(playerId, numOfTroopsToAdd) {}
}
