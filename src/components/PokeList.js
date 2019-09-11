import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokeList extends React.Component {
    render() {
      return (
        <ul className="poke-list">
        {this.props.pokemons.map((pokemon, index) => {
          return (
            <li className="poke-list__card" key={index}>
                <Pokemon 
                    id={pokemon.id}
                    name={pokemon.name}
                    url={pokemon.url}
                    types={pokemon.types}
                />
            </li>
          );
        })}
      </ul>
      );
    }
  }
  
PokeList.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.object)
}
  
export default PokeList;