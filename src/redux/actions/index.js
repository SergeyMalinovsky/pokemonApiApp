/* eslint-disable max-len */
import {
    GET_POKEMON_SUCCESS,
    GET_POKEMONS_SUCCESS,
    GET_POKEMONS_REQUEST,
    GET_POKEMON_REQUEST,
} from '../types';

import {
    USER_AUTHORIZATION_REQUEST,
    USER_AUTHORIZATION_SUCCESS,
    USER_AUTHORIZATION_FAILED,
} from '../types/userState';

import { USER_LOGOUT } from '../types/userActions';

export const API = {
    getPokemonSuccess: (payload) =>        ({ type: GET_POKEMON_SUCCESS,  payload: payload }),
    getPokemonRequest: (params) =>         ({ type: GET_POKEMON_REQUEST,  payload: params }),

    getPokemonsSuccess: (payload) =>        ({ type: GET_POKEMONS_SUCCESS, payload: payload }),
    getPokemonsRequest: (page, count) =>    ({ type: GET_POKEMONS_REQUEST, payload: { page, count } }),
};

export const USER = {
    userAuthorizationRequest: ( login, password ) => ({ type: USER_AUTHORIZATION_REQUEST, payload: { login, password } }),
    userAuthorizationSuccess: ( login, name ) => ({ type: USER_AUTHORIZATION_SUCCESS, payload: { login, name } }),
    userAuthorizationFailed: ( login, password, message ) => ({ type: USER_AUTHORIZATION_FAILED, payload: { login, password, message } }),

    userLogOut: () => ({ type: USER_LOGOUT }),
};
