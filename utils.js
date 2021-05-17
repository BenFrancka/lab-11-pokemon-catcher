export { findById, getRandomPokemon, renderThreePokemon };

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

}


//Should generate three random, not matching,  pokemon
function renderThreePokemon() {


    //while loop to check if any of the pokemon are the same    

    //increment pokemon "seen" state 

    //render pokemon images

    //assign values to radio inputs
}