import React from 'react';

class Pokemon extends React.Component {
    render() {
        return (
            <>
            <h1 className='title'>Pokedex</h1>
            <div className="pokemon-main">
                <img src="https://static.pokemonpets.com/images/monsters-images-800-800/1-Bulbasaur.webp" alt="pokemon" className="pokemon-img"/>
                <h2>Bulbasaur</h2>
                <ul className="pokemon-info">
                    <li>HP: 1200</li>
                    <li>Attack: 1200</li>
                    <li>Defense: 1200</li>
                </ul>
                <div>
                    <span>Grass</span>
                </div>
            </div>
            </>
        )
    }
}

export default Pokemon;