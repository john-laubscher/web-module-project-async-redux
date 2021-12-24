import axios from "axios";
import { pokemonNotFoundSweetAlert } from "../utils";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const NEXT_POKEMON = "NEXT_POKEMON";
export const PREVIOUS_POKEMON = "PREVIOUS_POKEMON";
export const MIN_POKEMON_ID = "MIN_POKEMON_ID";
export const MAX_POKEMON_ID = "MAX_POKEMON_ID";
export const SET_CURRENT_GENERATION = "SET_CURRENT_GENERATION";

export const getPokemon = (pokemonId, maxPokemonIdVariable) => (dispatch) => {
  dispatch(fetchStart());
  if (pokemonId > maxPokemonIdVariable) {
    pokemonNotFoundSweetAlert();
  }
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((resp) => {
      if (resp.data.id > maxPokemonIdVariable) {
        pokemonNotFoundSweetAlert();
      } else {
        dispatch(fetchSuccess(resp.data));
      }
    })
    .catch((err) => {
      dispatch(fetchFail(err));
      pokemonNotFoundSweetAlert();
    });
};

export const fetchStart = () => {
  return { type: FETCH_START };
};
export const fetchSuccess = (currentPokemon) => {
  return { type: FETCH_SUCCESS, payload: currentPokemon };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};
export const nextPokemon = () => {
  return { type: NEXT_POKEMON };
};
export const maxPokemonId = () => {
  return { type: MAX_POKEMON_ID };
};
export const previousPokemon = () => {
  return { type: PREVIOUS_POKEMON };
};
export const minPokemonId = (maxPokemonIdVariable) => {
  return { type: MIN_POKEMON_ID, payload: maxPokemonIdVariable };
};
export const setCurrentGeneration = (currentGeneration) => {
  return { type: SET_CURRENT_GENERATION, payload: currentGeneration };
};
