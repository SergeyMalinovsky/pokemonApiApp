const POKEAPI_URI =     'https://pokeapi.co/api';
const POKEAPI_VERSION = '/v2';

export function getPokemons(offset = 0, count = 10) {
    return fetch(
        `${POKEAPI_URI}${POKEAPI_VERSION}/pokemon/?offset=${offset}&limit=${count}`
    );
}

export function getPokemon(nameOrId) {
    return fetch(`${POKEAPI_URI}${POKEAPI_VERSION}/pokemon/${nameOrId}/`);
}
