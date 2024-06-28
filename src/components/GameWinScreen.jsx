/* eslint-disable react/prop-types */
import '../styles/EndScreen.css'; // Import the CSS file

export default function GameWinScreen({highScore, onPlayAgain, onQuit}) {
    // onNextlevel
    // onQuit
    

    return (
        <div className="end-screen-overlay">
            <div className="end-screen-container" >
                <h1>You Win!</h1>
                <img src="/winGif.webp" alt="Winning GIF" className="end-gif" />
                
                <p> Your High Score Is {highScore} </p>

                <div className='button-select'>
                    <button onClick={onPlayAgain}>Play Again!</button>
                    <button onClick={onPlayAgain}>Next Level</button>
                    <button onClick={onQuit}>Quit</button>
                    </div>

            </div>
        </div>

    );



}