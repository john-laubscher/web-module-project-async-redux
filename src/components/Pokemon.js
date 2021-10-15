import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PokemonTypes from "../components/PokemonTypes";
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

  const stylingFunc = () => {
    let typeColor = [];
    let stylingObj = {};
    if (types.length === 1) {
      stylingObj = {
        backgroundColor: PokemonTypes[types[0].type.name].color,
      };
      return stylingObj;
    }
    types.map((type) => {
      let pokemonTypeColor = PokemonTypes[type.type.name].color;
      typeColor.push(pokemonTypeColor);
      stylingObj = {
        background: `linear-gradient(to bottom right, ${typeColor[0]}, ${typeColor[1]})`,
      };
      return stylingObj;
    });
    return stylingObj;
  };

  return (
    <div>
      <div className="flexContainer">
        <div className="pokeCard" style={stylingFunc()}>
          <h1> {name} </h1>
          <img src={imageUrl} alt={`the ${name} pokemon`} />
          {types.map((type) => {
            let pokemonTypeData = PokemonTypes[type.type.name];
            return <img src={pokemonTypeData.img} alt={`the ${type.type.name} Pokémon type icon`} width={"18%"} height={"auto"} />;
          })}
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
