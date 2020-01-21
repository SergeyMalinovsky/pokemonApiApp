import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

import { getPokemonData, getPokemonsData } from "./pokemonApi";

export default combineReducers({
    routing: routerReducer,
    getPokemonData,
    getPokemonsData
});
