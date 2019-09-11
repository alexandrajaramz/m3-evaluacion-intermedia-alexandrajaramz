import React from 'react';

class Pokemon extends React.Component {
    render() {
      return (
        <div className="poke-list__card-container" id={`n${this.props.id}`}>
        <img className="pokemon__image" src={this.props.url} alt={`Imagen de ${this.props.name}`}/>
        <h2 className="pokemon__name">{this.props.name}</h2> 
        <ul className="pokemon__types">
          {this.props.types.map((type, typeIndex) => {
            return (
              <li className={`type ${typeIndex}`} key={typeIndex}>
                <p className="type">{type}</p> 
              </li>
            );
          })}
        </ul>
      </div>
      );
    }
  }
  
export default Pokemon;