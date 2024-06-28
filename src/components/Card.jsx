/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../styles/Card.css'; // Import the CSS file

export default function Card({pokemon, onClick, isShuffling}) {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        if (isShuffling) {
            setIsFlipped(true);
            setTimeout(() => {
                setIsFlipped(false);
            }, 500); 
        }
    }, [isShuffling]);

    const handleClick = () => {
        if (!isShuffling) {
            onClick(); 
        }
    };

    return (
        <div className={`pokemon-card ${isFlipped ? 'flipped' : ''}`} id={pokemon.name} onClick={handleClick}>
            <div className='pokemon-card-inner'>
                <div className='pokemon-card-front'>
                    <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="pokemon-image"
                    draggable="false"
                    />

                    <p className='pokemon-name'>
                        {pokemon.name}
                    </p>
                </div>
            </div>
            <div className='pokemon-card-back'>                
                <img
                    src="/pokemon-card-back.png"
                    alt="Pokemon Card Back"
                    className="pokemon-image"
                    draggable="false"
                />
            </div>

        </div>

    );



}