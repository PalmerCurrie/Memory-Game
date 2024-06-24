// import { useState } from 'react'
import "../styles/App.css";
import Card from "./Card";

import pokemonsFuncton from "../pokemonsFuncton";


// for loading in at start
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function App() {

  const AMOUNT = 5;  // number of pokemon to be displayed
  const MINIMUM_LOAD_TIME = 250;

  const {pokemons, setPokemons, getPokemons, shufflePokemons} = pokemonsFuncton();

  const initializePokemon = async (AMOUNT) => {
    const randomPokemons = getPokemons(AMOUNT);
    setPokemons(await randomPokemons);

    await sleep(MINIMUM_LOAD_TIME);
  }

  const startGame = (e) => {
    initializePokemon(AMOUNT);
  }





  return (
    <>
      <div>
        <button onClick={startGame}>Start Game</button>


        {/* // Have to hit Start Game button before uncomenting the below */}
        <div className="pokemon-card-container">
          {pokemons.map((pokemon, index) => (
            <div key={index} className="pokemon-card">
              <Card pokemon={pokemon} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
