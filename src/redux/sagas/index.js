import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getPokemon } from '../../api/gateway-api';
import { API } from '../actions';
import { GET_POKEMON_REQUEST, GET_POKEMONS_REQUEST } from '../types';

function* fetchPokemon(action) {
    try {
        const response = yield call(getPokemon, action.payload);
        const data = yield response.json();

        yield put(API.getPokemonSuccess(data));
    }
    catch(error) {
        console.error(error);
    }
}

function* fetchPokemons(action) {
    try {
        const response = yield call(getPokemon, action.payload);
        const data = yield response.json();

        yield put(API.getPokemonsSuccess(data));
    }
    catch(error) {
        console.error(error);
    }
}

function* fetchWatcher() {
    yield takeLatest(GET_POKEMON_REQUEST, fetchPokemon);
    yield takeLatest(GET_POKEMONS_REQUEST, fetchPokemons);
}

export default function* rootSaga() {
    yield all([
        fetchWatcher()
    ])
}
