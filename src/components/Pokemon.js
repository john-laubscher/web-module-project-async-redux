import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getPokemon, nextPokemon, previousPokemon, minPokemonId, maxPokemonId } from "../actions/index";

const PokemonCard = (props) => {
  let { name, imageUrl, pokemonId } = props;
  useEffect(() => {
    props.getPokemon(pokemonId);
  });

  const minPokemonId = () => {
    if (pokemonId <= 1) {
      props.minPokemonId();
    } else {
      props.previousPokemon();
    }
  };

  const maxPokemonId = () => {
    if (pokemonId >= 151) {
      props.maxPokemonId();
    } else {
      props.nextPokemon();
    }
  };
  return (
    <div>
      <div className="flexContainer">
        <div className="pokeCard">
          <h1> {name} </h1>
          <img src={imageUrl} alt={`the ${name} pokemon`} />
          <p>
            {" "}
            {name}'s pokedex # is {pokemonId}
          </p>
        </div>
      </div>
      <button onClick={minPokemonId}> Previous </button>
      <button onClick={maxPokemonId}> Next </button>
      <p>Search by name or Pokedex number</p>
      <input type="text" name="searchBar" value=""></input>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    name: state.name,
    imageUrl: state.imageUrl,
    pokemonId: state.pokemonId,
  };
};

export default connect(mapStateToProps, { previousPokemon, minPokemonId, nextPokemon, maxPokemonId, getPokemon })(PokemonCard);
