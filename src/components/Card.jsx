/* eslint-disable react/prop-types */
import '../styles/Card.css'; // Import the CSS file

export default function Card({pokemon}) {

    return (
        <div className="pokemon-card">
            <p>Pokemon Card</p>
            <p> {pokemon.name} </p>
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="card-image"
              draggable="false"
            />

        </div>

    );



}