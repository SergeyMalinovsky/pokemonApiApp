/* eslint-disable no-throw-literal */
/* eslint-disable no-console */
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getPokemon, getPokemons, getUser } from '../../api/gateway-api';
import { API, USER } from '../actions';

import { GET_POKEMON_REQUEST, GET_POKEMONS_REQUEST } from '../types';
import { USER_AUTHORIZATION_REQUEST, USER_AUTHORIZATION_FAILED } from '../types/userState';

import { mapPokemonData } from '../../services/pokemon-data';

function* fetchPokemon(action) {
    try {
        const response = yield call(getPokemon, action.payload);
        const data = yield response.json();

        yield mapPokemonData(data);
        yield put(API.getPokemonSuccess(data));
    } catch (error) {
        console.error(error);
    }
}

function* fetchPokemons(action) {
    try {
        const response = yield call(getPokemons, action.payload);
        const data = yield response.json();

        const pokemons = yield data.results.map(item => {
            return getPokemon(item.name)
                .then(resp => resp.json()
                    .then(dryData => mapPokemonData(dryData)));
        });


        const pokemonsPayload = yield Promise.all(pokemons)
            .then(result => {
                return result;
            });

        yield put(API.getPokemonsSuccess(pokemonsPayload));
    } catch (error) {
        console.error(error);
    }
}

function* userAthorization(action) {
    const { login, password } = action.payload;
    
    try {
        const response = yield call(getUser, { login, password });
        const userData = yield response.json();

        if (userData[0].login !== login.toLowerCase()) {
            throw USER_AUTHORIZATION_FAILED;
        }

        const { login: _login, name: _name } = yield userData[0];

        yield put(USER.userAuthorizationSuccess(_login, _name));
    } catch (error) {
        yield put(USER.userAuthorizationFailed(login, password, error));
    }
}

function* fetchWatcher() {
    yield takeLatest(GET_POKEMON_REQUEST, fetchPokemon);
    yield takeLatest(GET_POKEMONS_REQUEST, fetchPokemons);

    yield takeLatest(USER_AUTHORIZATION_REQUEST, userAthorization);
}

export default function* rootSaga() {
    yield all([
        fetchWatcher(),
    ]);
}
