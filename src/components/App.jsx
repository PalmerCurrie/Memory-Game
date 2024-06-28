// import { useState } from 'react'
import "../styles/App.css";
import Card from "./Card";
import Scoreboard from "./Scoreboard";
import { useState, useEffect } from "react";

import pokemonsFuncton from "../pokemonsFuncton";
import GameWinScreen from "./GameWinScreen";
import GameLoseScreen from "./GameLoseScreen";
import MainMenu from "./MainMenu";


// Loading In At Start
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function App() {


  // Game Logic:
  const [amount, setAmount] = useState(0);
  const [currentScore, setCurrentScore] = useState();
  const [highScore, setHighScore] = useState();
  const [gameWon, setGameWon] = useState(false);
  const [loseScreen, setLoseScreen] = useState(false);
  const [mainMenuScreen, setMainMenuScreen] = useState(true);
  const [selectedCards, setSelectedCards] = useState(new Set());
  const {pokemons, setPokemons, getPokemons, shufflePokemons} = pokemonsFuncton();

  useEffect(() => {
    if (currentScore >= amount) {
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
      // Picked Same Card, Game Over
      setLoseScreen(true);
    }
    updateScore();
  }

  
 const handlePlayAgain = () => {
    setGameWon(false);
    setLoseScreen(false);
    setCurrentScore(0);
    startGame(amount);
 }

 const onQuit = () => {
  setMainMenuScreen(true);
  setLoseScreen(false);
 }

  // Main Menu Logic:
   const handleLevelSelect = (newAmount) => {
    setAmount(newAmount);
    setGameWon(false)
    startGame(newAmount);
  }


 const MINIMUM_LOAD_TIME = 250;


 const initializePokemon = async (amount) => {
   const randomPokemons = getPokemons(amount);
   setPokemons(await randomPokemons);

   await sleep(MINIMUM_LOAD_TIME);
 }

 const startGame = (newAmount) => {
   setSelectedCards(new Set());
   initializePokemon(newAmount);
   
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



  return (
    <>
      <div>
        {mainMenuScreen && (<MainMenu handleLevelSelect={handleLevelSelect} setMainMenuScreen={setMainMenuScreen} highScore={highScore}/>)}

        {!mainMenuScreen && (
          <>
          <Scoreboard currentScore={currentScore} highScore={highScore} amount={amount}/>
          {renderCards()}
          {gameWon && 
            (<GameWinScreen highScore={highScore} onPlayAgain={handlePlayAgain} onQuit={onQuit}/> ) }
          {loseScreen && 
            (<GameLoseScreen highScore={highScore} onPlayAgain={handlePlayAgain} onQuit={onQuit}/> )}
            </>
        )}
      </div>
    </>
  )
}

export default App
