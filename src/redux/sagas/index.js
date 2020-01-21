import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getPokemon, getPokemons } from '../../api/gateway-api';
import { API } from '../actions';
import { GET_POKEMON_REQUEST, GET_POKEMONS_REQUEST } from '../types';
import { mapPokemonData } from '../../services/pokemon-data';

function* fetchPokemon(action) {
    try {
        const response = yield call(getPokemon, action.payload);
        const data = yield response.json();

        yield mapPokemonData(data);
        yield put(API.getPokemonSuccess(data));
    }
    catch(error) {
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
                    .then(data => mapPokemonData(data)))
        });


        const pokemonsPayload = yield Promise.all(pokemons)
            .then(result => {
                return result
            });

        yield put(API.getPokemonsSuccess(pokemonsPayload));
    }
    catch (error) {
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