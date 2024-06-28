/* eslint-disable react/prop-types */
import '../styles/MainMenu.css'; // Import the CSS file

export default function MainMenu({handleLevelSelect, setMainMenuScreen}) {
    
    // passes the amount to the App through handleLevelSelect
    const handleButtonClick = (amount) => {
        handleLevelSelect(amount);
        setMainMenuScreen(false);
      };

    return (
        <div className='main-screen-overlay'>
            <div className="main-container">
                <h1>Select a Difficulty:</h1>
                <div className='level-select'>

                    <button onClick={() => handleButtonClick(5)}>Easy</button>
                    <button onClick={() => handleButtonClick(10)}>Medium</button>
                    <button onClick={() => handleButtonClick(15)}>Hard</button>
                </div>

            </div>
        </div>

    );



}