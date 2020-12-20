import React from "react";
import styled from "styled-components";
import Continent from "./Continent";
import { NEIGHBOURS } from '../../../config/gameConstants';
import MapPaths from './MapPaths';
class Map {
    constructor(players) {
        this.players = players;
        this.continents = [
            new Continent("ASIA"),
            new Continent("AFRICA"),
            new Continent("AUSTRALIA"),
            new Continent("NORTH_AMERICA"),
            new Continent("SOUTH_AMERICA"),
            new Continent("EUROPE")
        ];
        this.selectedCountry = '';
        this.countries = [];
        for (let i = 0; i < this.continents.length; i++) {
            let tempCountries = this.continents[i].getCountries();
            for (let j = 0; j < tempCountries.length; j++) {
                this.countries.push(tempCountries[j]);
            }
        }
    }


    getAsJson() {
        var result = {};
        result.continents = this.continents;
        result.coutries = this.countries;
        return result
    }

    setSelectedCountry(selectedCountry) {
        for (let i = 0; i < this.countries.length; i++) {
            if (selectedCountry === this.countries[i].getId()) {
                this.selectedCountry = selectedCountry;
                this.countries[i].setActiveState(true);
            } else {
                this.countries[i].setActiveState(false);
            }
        }
    }

    getAttakingAndDefendingCountry(selectedCountryId, countryToAttackId) {
        let attackingCountry = null;
        let defendingCountry = null;
        for (let i = 0; i < this.countries.length; i++) {
            if (this.countries[i].getId() === selectedCountryId) {
                attackingCountry = this.countries[i];
            }
            if (this.countries[i].getId() === countryToAttackId) {
                defendingCountry = this.countries[i];
            }
        }
        return [attackingCountry, defendingCountry];
    }

    deployTroop(selectedCountryId, player, numberOfTroops) {
        let troopDeployed = false;
        for (let i = 0; i < this.continents.length; i++) {
            if (this.continents[i].deployTroopsToCountry(selectedCountryId, player, numberOfTroops)) {
                troopDeployed = true;
                break;
            };
        }
        return troopDeployed;
    }

    doPlayersHaveTroops() {
        let playerHasTroops = true;
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].getRemainingTroops() === 0) {
                playerHasTroops = false;
            } else {
                playerHasTroops = true;
            }
        }
        return playerHasTroops;
    }

    validateInitialMove(attackingCountryId, defendingCountryId, currentPlayer) {
        const result = this.countryIdsToNames(attackingCountryId, defendingCountryId);
        let attackingCountry, defendingCountry = null;
        if (result) {
            attackingCountry = result[0];
            defendingCountry = result[1];
        } else {
            return "";
        }

        // Check if player has no reserve 
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].getRemainingTroops() !== 0) {
                console.log(`${this.players[i].getName()} has troops that are to be deployed`);
                return "";
            }
        }

        // Countries should be neighbours
        if (!this.areAttackingAndDefendingCountryNeighbours(attackingCountry, defendingCountry)) {
            console.log("Origin and Target countries are not neighbours");
            return "";
        }

        // Check if current player owns the territory
        if (currentPlayer.getId() !== attackingCountry.getOccupyingPlayerId()) {
            console.log("Player does not own the territory he is trying to attack or maneuver from.");
            return "";
        }

        if (attackingCountry.getOccupyingPlayerId() === defendingCountry.getOccupyingPlayerId()) {
            return "MANEUVER";
        }

        return "ATTACK";
    }

    isAttackStateValid(attackingCountry, defendingCountry, numOfTroopsToAttackWith, numOfTroopsToDefendWith) {
        // Upto 3 troops can be used for attack
        if (numOfTroopsToAttackWith > 3) {
            console.log("Cannot attacking with more than 3 troops");
            return false;
        }

        // Country with less than 2 troops cannot attack.
        if (attackingCountry.getNumberOfTroops() < 2) {
            console.log("Country has less than 2 troops");
            return false;
        }

        // Less troops in country than to attack with
        if (numOfTroopsToAttackWith > attackingCountry.getNumberOfTroops()) {
            console.log("Country has less troops than the number you want to attack with.");
            return false;
        }

        // Cannot defend with more than 2 troops
        if (numOfTroopsToDefendWith > 2) {
            console.log("Cannot defend with more than 2 troops");
            return false;
        }

        // Defending country less troops than what they want to attack with
        if (numOfTroopsToDefendWith > defendingCountry.getNumberOfTroops()) {
            console.log("Cannot defend with number of troops more than currently in the country");
            return false;
        }

        return true;
    }

    getAttackingAndDefendingPlayer(attackingCountry, defendingCountry) {
        // Set attacking and defending player
        let attackingPlayer, defendingPlayer = null;
        for (let i = 0; i < this.players.length; i++) {
            if (attackingCountry.getOccupyingPlayerId() === this.players[i].getId()) {
                attackingPlayer = this.players[i];
            }
            if (defendingCountry.getOccupyingPlayerId() === this.players[i].getId()) {
                defendingPlayer = this.players[i];
            }
        }
        return [attackingPlayer, defendingPlayer];
    }

    countryIdsToNames(attackingCountryId, defendingCountryId) {
        if (!attackingCountryId) {
            console.log("Attacking country id is null");
            return false;
        }
        if (!defendingCountryId) {
            console.log("Defending country id is null");
            return false;
        }
        if (attackingCountryId === defendingCountryId) {
            console.log("Cannot attack or maneuver in same country");
            return false;
        }
        return this.getAttakingAndDefendingCountry(attackingCountryId, defendingCountryId);
    }

    attackTerritory(attackingCountryId, defendingCountryId, numOfTroopsToAttackWith, numOfTroopsToDefendWith) {

        const result = this.countryIdsToNames(attackingCountryId, defendingCountryId);
        let attackingCountry, defendingCountry = null;
        if (result) {
            attackingCountry = result[0]; 
            defendingCountry = result[1];
        } else {
            return false;
        }

        if (attackingCountry.getOccupyingPlayerId() === defendingCountry.getOccupyingPlayerId()) {
            return this.maneuverTroops(attackingCountryId, defendingCountryId, numOfTroopsToAttackWith);
        }

        if (!this.isAttackStateValid(attackingCountry, defendingCountry, numOfTroopsToAttackWith, numOfTroopsToDefendWith)) {
            return false;
        }

        const [attackingPlayer, defendingPlayer] = this.getAttackingAndDefendingPlayer(attackingCountry, defendingCountry);

        // Roll dice for attacker and defender. These will be sorted from highest to lowest.
        let attackerDiceRolls = attackingPlayer.rollDiceBasedOnTroops(numOfTroopsToAttackWith);
        let defenderDiceRolls = defendingPlayer.rollDiceBasedOnTroops(numOfTroopsToDefendWith);

        // Compare dice rolls
        let attackerToopsAfterComparison = new Array(numOfTroopsToAttackWith);
        let defenderTroopsAfterComparison = new Array(numOfTroopsToDefendWith);
        for (let i = 0; i < defenderDiceRolls.length; i++) {
            if (attackerDiceRolls[i] > defenderDiceRolls[i]) {
                attackerToopsAfterComparison[i] = 1;
                defenderTroopsAfterComparison[i] = -1;
            } else {
                attackerToopsAfterComparison[i] = -1;
                defenderTroopsAfterComparison[i] = 1;
            }
        }

        let numOfBattlesAttackerLost = 0;
        let numOfBattlesDefenderLost = 0;

        for (let i = 0; i < numOfTroopsToDefendWith; i++) {
            if (attackerToopsAfterComparison[i] < 0) {
                numOfBattlesAttackerLost++;
            }
            if (defenderTroopsAfterComparison[i] < 0) {
                numOfBattlesDefenderLost++;
            }
        }
        attackingCountry.setNumberOfTroops(attackingCountry.getNumberOfTroops() - numOfBattlesAttackerLost);
        defendingCountry.setNumberOfTroops(defendingCountry.getNumberOfTroops() - numOfBattlesDefenderLost);

        attackingCountry.verifyTroops();
        defendingCountry.verifyTroops();

        if (attackingCountry.getNumberOfTroops() === 0) {
            attackingCountry.setOccupyingPlayer(defendingPlayer);
            attackingCountry.setNumberOfTroops(numOfTroopsToDefendWith - numOfBattlesDefenderLost);
            defendingCountry.setNumberOfTroops(defendingCountry.getNumberOfTroops() - numOfTroopsToDefendWith);
        }
        if (defendingCountry.getNumberOfTroops() === 0) {
            defendingCountry.setOccupyingPlayer(attackingPlayer);
            defendingCountry.setNumberOfTroops(numOfTroopsToAttackWith - numOfBattlesAttackerLost);
            attackingCountry.setNumberOfTroops(attackingCountry.getNumberOfTroops() - (numOfTroopsToAttackWith));
        }
        return true;
    }

    areAttackingAndDefendingCountryNeighbours(attackingCountry, defendingCountry) {
        const neighboursOfAttackingCountry = NEIGHBOURS[attackingCountry.getId()].countries;
        const defendingCountryId = defendingCountry.getId();
        return neighboursOfAttackingCountry.findIndex(neighbour => neighbour === defendingCountryId) !== -1;
    }

    maneuverTroops(departingCountryId, destinationCountryId, numOfTroops) {
        const [departingCountry, destinationCountry] = this.getAttakingAndDefendingCountry(departingCountryId, destinationCountryId);

        if (numOfTroops <= 0) {
            console.log("Number of troops to maneuver not valid.");
            return false;
        }

        if (departingCountry.getOccupyingPlayerId() !== destinationCountry.getOccupyingPlayerId()) {
            console.log("Destination and Departing country have different occupying players.");
            return false;
        }

        if (departingCountry.getNumberOfTroops() <= numOfTroops) {
            console.log("Departing country has less troops than you want to move.");
            return false;
        }

        if (departingCountry.getNumberOfTroops() <= 1) {
            console.log("Departing country has 1 toop only.");
            return false;
        }
        departingCountry.setNumberOfTroops(departingCountry.getNumberOfTroops() - parseInt(numOfTroops));
        destinationCountry.setNumberOfTroops(destinationCountry.getNumberOfTroops() + parseInt(numOfTroops));

        return true;
    }

    resetCountryState() {
        let playerHasTroops = false;
        for (let i = 0; i < this.players.length; i++) {
            if (this.players[i].getRemainingTroops() !== 0) {
                playerHasTroops = true;
            }
        }
        for (let i = 0; i < this.countries.length; i++) {
            this.countries[i].setActiveState(false);
        }
        return !playerHasTroops;
    }

    setCountryToAttackState(countryId) {
        for (let i = 0; i < this.countries.length; i++) {
            if (this.countries[i].getId() === countryId) {
                this.countries[i].setColor("#FF0000");
            }
        }
    }

    getCountries() {
        return this.countries;
    }

    getContinents() {
        return this.continents;
    }

    getView() {
        const svg = React.createElement("svg", {
            height: "477",
            width: "719",
            viewBox: "0 0 719 477",
        },
            ...this.continents.map(continent => continent.getView())
        );
        return React.createElement(MapContainer, {}, svg);
    }
}

export default Map;

const MapContainer = styled.div`
    text-align: center;
`;



