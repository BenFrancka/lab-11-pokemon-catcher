// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { findById, getRandomPokemon, renderThreePokemon }from '../utils.js';
import { getPokedex, setPokeDex, catchPokemon, seePokemon } from '../local-storage-utils.js';
import  pokemonIndex  from '../data/pokemon.js';

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

//renderThreePokemon test
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

//getPokedex test
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

//setPokeDex test
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

//catchPokemon test
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

//seePokemon test
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