// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { getRandomPokemon } from '../utils.js';
//import { renderThreePokemon } from '../app.js';
import { getPokedex, setPokeDex, catchPokemon, seePokemon } from '../local-storage-utils.js';
import { renderThreePokemon } from '../app.js';
//import pokemonIndex from '../data/pokemon.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


//////////////////////////////////////////////////////////////////////////////////////////
//getRandomPokemon test
test('select random pokemon index from pokemon data array, returns an object from that array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
   // const expected = pokemonIndex[0];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomPokemon();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(typeof actual, 'object');
});


/////////////////////////////////////////////////////////////////////////////////////////
//renderThreePokemon test
test('should generate three random, non-matching pokemon images from pokemonIndex', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const pokemon1 = getRandomPokemon();
    const pokemon2 = getRandomPokemon();
    const pokemon3 = getRandomPokemon();
    
    //Act 
    // Call the function you're testing and set the result to a const
    const threeNewPokemon = renderThreePokemon();
    if threeNewPokemon (
        pokemon1 !== pokemon2
        && pokemon1 !== pokemon3
        && pokemon2 !== pokemon3
    )

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


//////////////////////////////////////////////////////////////////////////////////////////
//getPokedex test
test('Pulls stringified data from local storage| if data does not exist, creates empty array| parses data| returns parsed data', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const pokemon = [
        {
            id: 1,
            caught: 0,
            seen: 0

        }
    ];

    const stringyPokemon = JSON.stringify(pokemon);
    localStorage.setItem('POKEDEX', stringyPokemon);
    
    //Act 
    // Call the function you're testing and set the result to a const
    const localStoragePokemon = getPokedex();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(pokemon, localStoragePokemon);
});


//////////////////////////////////////////////////////////////////////////////////////
//setPokeDex test
test(' takes in a new pokedex, stringifies new pokedex and sets it in local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const pokemon = [
        {
            id: 2,
            seen: 3,
            caught: 2
        }
    ];
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    setPokeDex(pokemon);

    const parsedPokemon = getPokedex();
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(pokemon, parsedPokemon);
});


/////////////////////////////////////////////////////////////////////////////////////////
//catchPokemon test
test('increments the caught number of a selected pokemon upon calling the funciton', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const pokemon = [
        {
            id: 2,
            seen: 1,
            caught: 1
        }
    ];
    
    //Act 
    // Call the function you're testing and set the result to a const
    catchPokemon(pokemon);

    const caughtPokemon = [
        {
            id: 2,
            seen: 1,
            caught: 2
        }
    ];

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(pokemon, caughtPokemon);
});


//////////////////////////////////////////////////////////////////////////////////////////
//seePokemon test
test('increments the seen number in a pokemon object, or creates a new object with a seen number of one if selected pokemon has not been seen previously', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const pokemon = [
        {
            id: 2,
            seen: 1,
            caught: 1
        }
    ];
    
    //Act 
    // Call the function you're testing and set the result to a const
    seePokemon(pokemon);

    const seenPokemon = [
        {
            id: 2,
            seen: 2,
            caught: 1
        }
    ];

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(pokemon, seenPokemon);
});