/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
// import uniqid from "uniqid";


export default function pokemonsFunction() {

    const MAX_ID = 721; // highest id of pokemon to go to
    const [pokemons, setPokemons] = useState([
    //     {
    //     name: "",
    //     image: "",
    //     id: "",
    //     shiny: false
    // }
]);
    


    // int id   bool shiny
    // returns a pokemon object given an id and a boolean shiny
    const getPokemon = async ({id, shiny}) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const { name, sprites } = await res.json();

        // picks to show image as shiny or default based on shiny parameter
        const image = sprites[shiny ? "front_shiny" : "front_default"];

        
        // return an object 
        return {name, image, id, shiny}
    }

    // int size  is the amount of pokemons to be returned in the array
    // returns an array of pokemon objects
    const getPokemons = async (size) => {

        const pokemonToShow = []; // list of objects of type {int id, bool shiny}
        const shiny = Math.random() > 0.50;

        while (pokemonToShow.length < size) {
            const randomID = Math.floor(Math.random() * MAX_ID) + 1;

            const isDuplicateID = pokemonToShow.find(({ id }) => id === randomID);
            
        // if not duplicate id, add an object of {id, shiny} to pokemonToShow
            if (!isDuplicateID) {
                pokemonToShow.push({id: randomID, shiny: shiny} );
            }

        }
        
        // returns a list of the pokemon objects after mapping id and shiny to getPokemon function
        return await Promise.all(pokemonToShow.map(getPokemon));

    }


    function shufflePokemons() {
        const availableCards = [...pokemons];
        const shuffledCards = [];

        while (availableCards.length != 0) {
            const index = Math.floor(Math.random * availableCards.length);
            const card = availableCards[index];

            // give the new card a unique id to trigger re render
            // card.id = uniqid();
            shuffledCards.push(card);
            availableCards.splice(index, 1); // remove given card from avaiable cards
        }

        setPokemons(shuffledCards);
    }



    return { pokemons, setPokemons, getPokemons, shufflePokemons};
    // pokemons:            array of pokemon objects of {name, image, id, shiny}
    // setPokemons:         sets the pokemons array
    // getPokemons:         gets random pokemons with given size
    // shufflePokemons:     shuffle the pokemons by randomly distributing the indexes in the array
}