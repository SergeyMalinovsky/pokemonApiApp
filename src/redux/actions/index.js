import { 
        GET_POKEMON_SUCCESS, 
        GET_POKEMONS_SUCCESS, 
        GET_POKEMONS_REQUEST, 
        GET_POKEMON_REQUEST 
    } from '../types';

export const API = {
    getPokemonSuccess:  (payload) =>        ({ type: GET_POKEMON_SUCCESS,  payload: payload }),
    getPokemonRequest:  (params) =>         ({ type: GET_POKEMON_REQUEST,  payload: params }),

    getPokemonsSuccess: (payload) =>        ({ type: GET_POKEMONS_SUCCESS, payload: payload }),
    getPokemonsRequest: (page, count) =>    ({ type: GET_POKEMONS_REQUEST, payload: {page, count} })
}
