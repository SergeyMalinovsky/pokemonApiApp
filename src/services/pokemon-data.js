import { Pokemon } from "../constants/pokemons";

export const mapPokemonData = (payload) => {
    console.log(payload);
    const values = Object.values(Pokemon);
    const keys = Object.keys(Pokemon);

    const entries = values.map((key, index) => {
        return [keys[index], payload[key]];
    })
    
    return Object.fromEntries(entries);

}
