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
  const [additionalPokemonInfo, setAdditionalPokemonInfo] = useState([]);

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

  // const stylingObj = {
  //   backgroundColor: `linear-Gradient(to bottom right, ${displayPokemonType})`
  // }

  //#32CD32, #8B008

  // const stylingObj = {
  //   backgroundImage: "linear-gradient(to bottom right, (50,205,50), (139,0,139))",
  // };

  // will need to include logic for singular types--gradient requires 2--same type can be used twice

  // const stylingObj = {
  //   background: `linear-gradient(to bottom right, ${additionalPokemonInfo[0].color}, ${additionalPokemonInfo[1].color})`,
  // };

  // need to add some conditional rendering for the second img tag on line 130 (only render if different than the first one)

  return (
    <div>
      <div className="flexContainer">
        <div className="pokeCard">
          <h1> {name} </h1>
          <img src={imageUrl} alt={`the ${name} pokemon`} />
          {types.map((type) => {
            let pokemonTypeData = PokemonTypes[type.type.name];
            console.log("pokemonTypeData", pokemonTypeData);
            console.log("color test", pokemonTypeData.color);
            console.log("ALT TEST:,", type.type.name);
            console.log("img test", pokemonTypeData.img);
            console.log("direct test", PokemonTypes[type.type.name].img);
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
