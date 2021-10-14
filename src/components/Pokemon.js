import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getPokemon, nextPokemon, previousPokemon, minPokemonId, maxPokemonId } from "../actions/index";

const PokemonCard = (props) => {
  const { name, imageUrl, pokemonId, types } = props;
  useEffect(() => {
    props.getPokemon(pokemonId);
  }, [pokemonId]);

  const [searchBarValue, setSearchBarValue] = useState("");

  const handleChange = (event) => {
    setSearchBarValue(event.target.value);
  };

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

  const maxSearchId = () => {
    if (searchBarValue > 151) {
      setSearchBarValue(151);
      props.getPokemon(151);
    } else {
      props.getPokemon(searchBarValue);
    }
  };

  const displayPokemonType = () => {};
  return (
    <div>
      <div className="flexContainer">
        <div className="pokeCard">
          <h1> {name} </h1>
          <img src={imageUrl} alt={`the ${name} pokemon`} />
          <p>
            {" "}
            {name}'s Pokédex # is {pokemonId}
          </p>
        </div>
      </div>
      <button onClick={minPokemonId}> Previous </button>
      <button onClick={maxPokemonId}> Next </button>
      <p>Search by name or Pokédex number</p>
      <input type="text" name="searchBar" value={searchBarValue} onChange={handleChange}></input>
      <button onClick={() => maxSearchId()}>Search Pokémon</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    name: state.name,
    imageUrl: state.imageUrl,
    pokemonId: state.pokemonId,
    types: state.types,
  };
};

export default connect(mapStateToProps, { previousPokemon, minPokemonId, nextPokemon, maxPokemonId, getPokemon })(PokemonCard);
