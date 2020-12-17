import { combineReducers } from 'redux'

import {
    SET_CURRENT_USER,
    SET_CURRENT_PLAYER,
    SET_CURRENT_COUNTRY
} from './actions';

/**
 * User Reducers
 */
function userReducers(state = {}, action) {
    const { user } = action;

    switch (action.type) {
        // load the user to the store
        case SET_CURRENT_USER:
            return user

        // any other action: return the current state
        default:
            return state;
    }
}

/**
 * Players Reducers
 */
function playerReducers(state = {}, action) {
    const { player, players } = action;

    switch (action.type) {
        // load current player to store
        case SET_CURRENT_PLAYER:
            return player
        // any other action: return the current state
        default:
            return state;
    }
}


/**
 * Countries Reducers
 */
function countryReducers(state = {}, action) {
    const { country, countries } = action;

    switch (action.type) {
        // load current player to store
        case SET_CURRENT_COUNTRY:
            return country
        // any other action: return the current state
        default:
            return state;
    }
}


// export all above reducers combined
export default combineReducers({ currentUser: userReducers, players: playerReducers, countries: countryReducers });