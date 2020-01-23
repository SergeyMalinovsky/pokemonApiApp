import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { getPokemonData, getPokemonsData } from './pokemonApi';
import { userStateReducer, userDataReducer } from './user';

export default combineReducers({
    routing: routerReducer,
    getPokemonData,
    getPokemonsData,
    userStateReducer,
    userDataReducer,
});
