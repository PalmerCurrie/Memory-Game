/* eslint-disable react/prop-types */
import '../styles/GameWinScreen.css'; // Import the CSS file

export default function GameWinScreen({currentScore, onPlayAgain}) {
    // onPlayAgain
    // onNextLevel
    // onQuit


   
    return (
        <div className="winning-screen-overlay">
            <div className="winning-screen-container" >
                <h1>You Win!</h1>
                <img src="/winGif.webp" alt="Winning GIF" className="winning-gif" />
                
                <p> Your final score is {currentScore} </p>

                <div className='button-select'>
                    <button onClick={onPlayAgain}>Play Again!</button>
                    <button onClick={onPlayAgain}>Next Level</button>
                    <button onClick={onPlayAgain}>Quit</button>
                    </div>

            </div>
        </div>

    );



}