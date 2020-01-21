import { 
    GET_POKEMONS_SUCCESS, 
    GET_POKEMONS_FAILED,

    GET_POKEMON_SUCCESS, 
    GET_POKEMON_FAILED,

    UNDEFINED
    } from '../types';

const initialState = {
    list: {
        status: UNDEFINED,
        data: [],
        message: ''
    },
    item: {
        status: UNDEFINED,
        data: {},
        message: ''
    }
}

export function getPokemonsData(state = initialState.list, action) {
    switch(action.type) {
        case GET_POKEMONS_SUCCESS:
            return { status: GET_POKEMONS_SUCCESS, data: action.payload };
        case GET_POKEMONS_FAILED:
            return { status: GET_POKEMONS_FAILED, message: action.payload };
        default:
            return state;
    }
}

export function getPokemonData(state = initialState.item, action) {
    switch(action.type) {
        case GET_POKEMON_SUCCESS:
            return { status: GET_POKEMON_SUCCESS, data: action.payload };
        case GET_POKEMON_FAILED:
            return { status: GET_POKEMON_FAILED, message: action.payload };
        default:
            return state;
    }
}
