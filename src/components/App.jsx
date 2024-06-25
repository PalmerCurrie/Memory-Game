// import { useState } from 'react'
import "../styles/App.css";
import Card from "./Card";
import { useState } from "react";

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

  const startGame = () => {
    setSelectedCards(new Set());
    initializePokemon(AMOUNT);
  }


  const renderCards = () => {
    return (
      <div className="pokemon-card-container" id="pokemon-card-container">
          {pokemons.map((pokemon, index) => (
              <Card pokemon={pokemon} key={index} 
              onClick={ () => handleCardClick(pokemon)}  // passes pokemon object to handleCardClick
              />
          ))}
      </div>
    )
  }


  // Game Logic:

  const [selectedCards, setSelectedCards] = useState(new Set());


  const handleCardClick = (pokemon) => {

    if (!selectedCards.has(pokemon.name)) {
      const updateSelectedCard = new Set(selectedCards);
      updateSelectedCard.add(pokemon.name);
      setSelectedCards(updateSelectedCard);
      shufflePokemons();
    } else {
      startGame(); // temporary placeholder for restarting the game
      console.log("already selected" + pokemon.name);
      // end game
      // load in end game screen etc......
    }

    // update score
  }


  






  return (
    <>
      <div>
        <div className="scoreboard">
            <div className="current-score">
              Current Score: {selectedCards.size}
            </div>
        </div>
        <button onClick={startGame}>Start Game</button>
        <button onClick={shufflePokemons}>Shuffle Cards</button>

        
        {renderCards()}
      </div>
    </>
  )
}

export default App
