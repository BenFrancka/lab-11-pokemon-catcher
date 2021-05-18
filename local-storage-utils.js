export { getPokedex, setPokeDex, catchPokemon, seePokemon };
import { findById } from './utils.js';

const POKEDEX = 'POKEDEX';

//gets pokedex from local storage
function getPokedex() {

    const pokeDexString = localStorage.getItem(POKEDEX);

    //if there is no such item in local storage, creates empty array
    if (!pokeDexString) 
        return [];
    
    //parses pokedex from local storage
    const pokeDex = JSON.parse(pokeDexString);
    
    //gets the pokedex
    return pokeDex;
}

//sets new user enounter info to local storage (updates with post click event info)
function setPokeDex(newPokeDex) {
    const pokeDexString = JSON.stringify(newPokeDex);

    localStorage.setItem(POKEDEX, pokeDexString);
}

//incriments the number of catches for a particular pokemon based on radio selection and click event, sets to local storage.
function catchPokemon(selectedPokemon) {
    const pokeDex = getPokedex();

    const targetedPokemon = findById(pokeDex, selectedPokemon);

    targetedPokemon.caught++;

    setPokeDex(pokeDex);
}


function seePokemon(selectedPokemon) {
    const pokeDex = getPokedex();

    const seenPokemon = findById(pokeDex, selectedPokemon);

    if (seenPokemon) {
        seenPokemon.seen++;
    } else {
        const newPokemon = {
            caught: 0,
            seen: 1,
            id: selectedPokemon
        };
        pokeDex.push(newPokemon);
    }
    setPokeDex(pokeDex);
}