// import { useState } from 'react'
import "../styles/App.css";
import Card from "./Card";
import Scoreboard from "./Scoreboard";
import { useState, useEffect } from "react";

import pokemonsFuncton from "../pokemonsFuncton";
import GameWinScreen from "./GameWinScreen";


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

  const [currentScore, setCurrentScore] = useState();
  const [highScore, setHighScore] = useState();
  const [gameWon, setGameWon] = useState(false);
  const [selectedCards, setSelectedCards] = useState(new Set());

  useEffect(() => {
    if (currentScore >= AMOUNT) {
      setGameWon(true);
    }
  }, [currentScore]) // runs when currentScore changes    DependencyArray

  useEffect(() => {
    updateScore();
  }, [selectedCards])
  


  const updateScore = () => {
    let score = selectedCards.size;
    setCurrentScore(score);

    if (highScore == null || highScore == 0) {
      setHighScore(score);
    }

    if (score > highScore) {
      setHighScore(score);
    }
  }


  const handleCardClick = (pokemon) => {

    // Successful Card Select
    if (!selectedCards.has(pokemon.name)) {
      const updateSelectedCard = new Set(selectedCards);
      updateSelectedCard.add(pokemon.name);
      setSelectedCards(updateSelectedCard);
      shufflePokemons();
    } else {
      startGame(); // temporary placeholder for restarting the game
      console.log("already selected: " + pokemon.name);
      // end game
      // load in end game screen etc......
    }
    updateScore();
  }

  
 const handlePlayAgain = () => {
    setGameWon(false);
    setCurrentScore(0);
    startGame();
 }


  return (
    <>
      <div>
        <Scoreboard currentScore={currentScore} highScore={highScore} amount={AMOUNT}/>
        <button onClick={startGame}>Start Game</button>
        <button onClick={shufflePokemons}>Shuffle Cards</button>
      
        {renderCards()}

        {gameWon && (<GameWinScreen currentScore={currentScore} onPlayAgain={handlePlayAgain}/>) }
      </div>
    </>
  )
}

export default App
