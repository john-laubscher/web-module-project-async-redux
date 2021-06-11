import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getPokemon, nextPokemon, previousPokemon, dispatch } from "../actions/index";

const PokemonCard = (props) => {
  const { name, imageUrl, pokemonId, previousPokemon, nextPokemon } = props;
  useEffect(() => {
    props.dispatch(getPokemon(pokemonId));
  });

  const prevPokemon = () => {
    props.dispatch(previousPokemon());
  };

  const nexPokemon = () => {
    props.dispatch(nextPokemon);
    console.log("nextpokemon", nextPokemon);
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
      <button onClick={prevPokemon}> Previous </button>
      <button onClick={nexPokemon()}> Next </button>
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

export default connect(mapStateToProps)(PokemonCard);
