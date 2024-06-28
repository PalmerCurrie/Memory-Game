/* eslint-disable react/prop-types */
import '../styles/Card.css'; // Import the CSS file

export default function Card({pokemon, onClick}) {

    const handleClick = () => {
        onClick(); 
      };

    return (
        <div className="pokemon-card" id={pokemon.name} onClick={handleClick}>

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

    );



}