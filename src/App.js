import React from 'react';
import Pokemon from './Components/Pokemon/Pokemon';
import DATA from './assets/pokemon_data';

const App = () => {

    return (
      <>
        <h1 className="title">Pokedex</h1>
        <div className="pokemon-container">
          {DATA.map((pokeObj) => {
            return <Pokemon 
                      key={pokeObj.id}
                      name={pokeObj.name.english}
                      photo={pokeObj.image}
                      hp={pokeObj.base.HP}
                      attack={pokeObj.base.Attack}
                      defense={pokeObj.base.Defense}
                      types={pokeObj.type}
                      />       
          })}
        </div>
      </>
    )
  }

export default App;


