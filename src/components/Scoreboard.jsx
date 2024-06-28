/* eslint-disable react/prop-types */
import '../styles/Scoreboard.css'; // Import the CSS file

export default function Scoreboard({currentScore, highScore, amount}) {

   
    return (
        <div className="scoreboard-container" >
            <div className="scores">
              <p>
                Current Score: {currentScore == null ? 0 : currentScore} 
              </p>
              <p>
                High Score: {highScore == null ? 0 : highScore}
              </p>
            </div>
            <div className='game'>
                <p>
                    {currentScore == null ? 0 : currentScore} / {amount}
                </p>
            </div>
        
        </div>

    );



}