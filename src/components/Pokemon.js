import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PokemonTypes from "../components/PokemonTypes";
import { getPokemon, nextPokemon, previousPokemon, minPokemonId, maxPokemonId } from "../actions/index";

const PokemonCard = (props) => {
  const { getPokemon, name, imageUrl, pokemonId, types, past_types } = props;
  useEffect(() => {
    getPokemon(pokemonId);
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
    if (past_types.length > 0) {
      let color = PokemonTypes[past_types[0].types[0].type.name].color;
      stylingObj = {
        backgroundColor: color,
      };
    } else if (types.length === 1) {
      stylingObj = {
        backgroundColor: PokemonTypes[types[0].type.name].color,
      };
      return stylingObj;
    } else if (types.length > 1) {
      types.map((type) => {
        let pokemonTypeColor = PokemonTypes[type.type.name].color;
        typeColor.push(pokemonTypeColor);
        stylingObj = {
          background: `linear-gradient(to bottom right, ${typeColor[0]}, ${typeColor[1]})`,
        };
        return stylingObj;
      });
    }
    return stylingObj;
  };

  const determineTypesIcons = () => {
    if (past_types.length > 0) {
      let typesIconInfo = PokemonTypes[past_types[0].types[0].type.name];
      console.log("typesIconInfo", typesIconInfo);
      return (
        <div>
          <img src={typesIconInfo.img} alt={`the ${typesIconInfo.name} Pokémon type icon`} width={"35%"} height={"auto%"} />
          <p className="pokemonTypeName">{past_types[0].types[0].type.name}</p>
        </div>
      );
    } else {
      let element = "";
      let elementsArray = [];
      types.map((type) => {
        let pokemonTypeData = PokemonTypes[type.type.name];
        element = (
          <div className="pokemonTypeContainer" key={type.type.name}>
            <img src={pokemonTypeData.img} alt={`the ${type.type.name} Pokémon type icon`} width={"35%"} height={"auto"} />
            <p className="pokemonTypeName">{type.type.name}</p>
          </div>
        );
        elementsArray.push(element);
        return elementsArray;
      });
      return elementsArray;
    }
  };

  return (
    <div>
      <div className="flexContainer">
        <div className="pokeCard" style={stylingFunc()}>
          <h2> {name} </h2>
          <img src={imageUrl} alt={`the ${name} pokemon`} width={"55%"} height={"auto"} />
          <div className="pokemonTypeFlexContainer">{determineTypesIcons()}</div>
          <p className="pokedexNumber">
            {" "}
            {name}'s Pokédex # is {pokemonId}
          </p>
        </div>
      </div>
      <button className="nextPreviousPokemon" onClick={minPokemonId}>
        {" "}
        Previous{" "}
      </button>
      <button className="nextPreviousPokemon" onClick={maxPokemonId}>
        {" "}
        Next{" "}
      </button>
      <p className="searchBar">Search below by name or Pokédex number</p>
      <input type="text" name="searchBar" value={searchBarValue} onChange={handleChange}></input>
      <button className="nextPreviousPokemon" onClick={() => maxSearchId()}>
        Search Pokémon
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    name: state.name,
    imageUrl: state.imageUrl,
    pokemonId: state.pokemonId,
    types: state.types,
    past_types: state.past_types,
  };
};

export default connect(mapStateToProps, { previousPokemon, minPokemonId, nextPokemon, maxPokemonId, getPokemon })(PokemonCard);
