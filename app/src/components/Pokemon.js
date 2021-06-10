import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getPokemon } from "../actions/index";

const PokemonCard = (props) => {
  const { name, imageUrl, pokemonId } = props;
  useEffect(() => {
    props.dispatch(getPokemon(pokemonId));
  });
  return (
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
