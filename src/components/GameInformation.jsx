/* eslint-disable react/prop-types */
import '../styles/GameInformation.css'; // Import the CSS file

export default function GameInformation() {

    return (
        <div className="container">
            <img src="/QuestionMark.png" alt="Question Mark PNG" className="question-mark-icon" />

            <div className="hover-content">
                {/* <p>
                    Welcome to the Pokémon Memory Game! Test your memory and see how well you know your favorite Pokémon.
                </p> */}
                <p>
                    <strong>How to Play:</strong>
                </p>
                <ul>
                    <li>Your goal is to click on all the cards without clicking the same card twice.</li>
                    <li>Each time you click a card, the order of the cards will shuffle, adding to the challenge.</li>
                    <li>Continue clicking until you’ve clicked all the cards correctly to win the game.</li>
                    <li>If you click a card you’ve already clicked before, the game is over.</li>
                </ul>
                <p>
                    Ready to become a Pokémon memory master? Let’s get started!
                </p>
            </div>
            
        </div>

    );



}