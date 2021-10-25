import React from 'react';
import PropTypes from 'prop-types';
import { handleBgPokemon } from '../../util/handleBackground'

class Pokemon extends React.Component {
    render() {
        const typePokemon = handleBgPokemon(this.props.types[0]);
        return (
            <div className="pokemon-card" style={{backgroundColor:typePokemon}}>
                <img src={this.props.photo} alt={`Pokemon: ${this.props.name}`} className="pokemon-img"/>
                <h2>{this.props.name}</h2>
                <ul className="pokemon-info">
                    <li>{`HP: ${this.props.hp}`}</li>
                    <li>{`Attack: ${this.props.attack}`}</li>
                    <li>{`Defense: ${this.props.defense}`}</li>
                </ul>
                <span>{this.props.types}</span>
            </div>
            
        )
    }
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