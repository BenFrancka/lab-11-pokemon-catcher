export { renderThreePokemon };
// import functions and data
//import pokemonIndex from './data/pokemon.js';
import { catchPokemon, seePokemon, caughtTotal } from './local-storage-utils.js';
import { getRandomPokemon } from './utils.js';

//grad DOM elements
const pokeBall = document.querySelector('#poke-ball');
const selection1 = document.querySelector('#pokemon-1');
const selection2 = document.querySelector('#pokemon-2');
const selection3 = document.querySelector('#pokemon-3');
const image1 = document.querySelector('#pokemon-img-1');
const image2 = document.querySelector('#pokemon-img-2');
const image3 = document.querySelector('#pokemon-img-3');



//declare renderThreePokemon function for use in event listener
//Should generate three random, not matching,  pokemon
function renderThreePokemon() {

  //call getRandom Pokemon to generate three random pokemon
    let pokemon1 = getRandomPokemon();
    let pokemon2 = getRandomPokemon();
    let pokemon3 = getRandomPokemon();


  //while loop to check if any of the pokemon are the same    
    while (
        pokemon1.id === pokemon2.id
      || pokemon1.id === pokemon3.id
      || pokemon2.id === pokemon3.id
    ) {
        pokemon1 = getRandomPokemon();
        pokemon2 = getRandomPokemon();
        pokemon3 = getRandomPokemon(); 
    }

  //increment pokemon "seen" state 
    seePokemon(pokemon1.id);
    seePokemon(pokemon2.id);
    seePokemon(pokemon3.id);

  //render pokemon images
    image1.src = pokemon1.url_image;
    image2.src = pokemon2.url_image;
    image3.src = pokemon3.url_image;


  //assign values to radio inputs
    selection1.value = pokemon1.id;
    selection2.value = pokemon2.id;
    selection3.value = pokemon3.id;
}

//call render three pokemon to initialize state
renderThreePokemon();

// set event listener for pokeball
pokeBall.addEventListener('click', () => {

  //user input from radio buttons
    const selectedPokemon = document.querySelector(':checked');
    const caughtPokemon = selectedPokemon.value;

    //catch the pokemon with catchPokemon function
    catchPokemon(caughtPokemon);

  //declare total captured number
    const caught = caughtTotal();

 //if statement that checks if total caught is equal to ten
  //if so, redirect to results page
    if (caught >= 10) {
        window.location.replace('/results');
    }
 
    //upate the state 
    renderThreePokemon();
});




