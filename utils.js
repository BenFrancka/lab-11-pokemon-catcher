export { findById, getRandomPokemon };
import pokemonIndex from './data/pokemon.js';

function findById(someArray, someId) {
    const numberId = +(someId);
    for (let item of someArray) {
        if (item.id === numberId) 
            return item;
    }

    return null;
} 

//Should select a random pokemon from raw data array using Math.random
function getRandomPokemon() {
    const randomIndexData = Math.floor(Math.random() * pokemonIndex.length);

    const randomPokemon = pokemonIndex[randomIndexData];

    return randomPokemon;
}


