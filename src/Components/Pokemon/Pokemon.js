import React from 'react';
import PropTypes from 'prop-types';
import { handleBgPokemon, handleType } from '../../util/handleBackground';




const Pokemon = (props) => {

    const {types, photo, name, hp, attack, defense } = props;

        const bgPokemon = handleBgPokemon(types[0]);
        const iconType = handleType(types[0]);
        console.log(iconType)
        return (
            <div className="pokemon-card" style={{backgroundColor:bgPokemon, borderColor: bgPokemon}}>
                <img src={photo} alt={`Pokemon: ${name}`} className="pokemon-img"/>
                <h2>{name}</h2>
                <ul className="pokemon-info">
                    <li>{`HP: ${hp}`}</li>
                    <li>{`Attack: ${attack}`}</li>
                    <li>{`Defense: ${defense}`}</li>
                </ul>
                <span className='icon-type'><img src={iconType} alt={types[0]}></img></span>
            </div>
        )
    }

Pokemon.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    hp: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    defense: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.string)
}

export default Pokemon;