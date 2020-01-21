import { GET_POKEMON_SUCCESS, GET_POKEMONS_SUCCESS } from '../types';

export const API = {
    getPokemonSuccess:  (payload) => ({ type: GET_POKEMON_SUCCESS,  payload: payload }),
    getPokemonsSuccess: (payload) => ({ type: GET_POKEMONS_SUCCESS, payload: payload })
}
