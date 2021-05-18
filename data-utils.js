import { findById } from './utils.js';
import pokeDex from './data/pokemon.js';

export function mungeCaught(pokemonArray) {
    const caughtResults = [];
    for (let pokemon of pokemonArray) {
        caughtResults.push(pokemon.caught);
    }
    return caughtResults;
}

export function mungeNames(pokemonArray) {
    const nameResults = [];
    for (let pokemon of pokemonArray) {
        const nameData = findById(pokeDex, pokemon.id);
        nameResults.push(nameData.pokemon);
    }
    return nameResults;
}

export function mungeColors(pokemonArray) {
    const colorResults = [];

    for (let pokemon of pokemonArray) {
        const colorData = findById(pokeDex, pokemon.id);
        colorResults.push(colorData.color_1);
    }
    return colorResults;
}

export function mungeType(pokemonArray) {
    const typeResults = [];

    for (let pokemon of pokemonArray) {
        const typeData = findById(pokeDex, pokemon.id);
        typeResults.push(typeData.type_1);
    }
    return typeResults;
}

export function mungeSeen(pokemonArray) {
    const seenResults = [];
    for (let pokemon of pokemonArray) {
        seenResults.push(pokemon.seen);
    }
    return seenResults;
}