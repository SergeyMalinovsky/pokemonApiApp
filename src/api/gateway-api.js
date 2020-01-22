const POKEAPI_URI =     'https://pokeapi.co/api';
const POKEAPI_VERSION = '/v2';

export function getPokemons(params) {
    const { page, count } = params;

    const offset = page <= 1 ? 0 : page * count;

    return getCountOfAllPokemons()
        .then(response => response.json()
            .then(data => {
                if(offset >= data.count) {
                    throw 'No have more pokemons!';
                }

                return fetch(
                    `${POKEAPI_URI}${POKEAPI_VERSION}/pokemon/?offset=${ offset }&limit=${ count }`
                );
            }));
}

export function getPokemon(nameOrId) {
    return fetch(`${POKEAPI_URI}${POKEAPI_VERSION}/pokemon/${nameOrId}/`);
}

function getCountOfAllPokemons(){ return fetch(`${POKEAPI_URI}${POKEAPI_VERSION}/pokemon/`)};
