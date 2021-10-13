import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const NEXT_POKEMON = "NEXT_POKEMON";
export const PREVIOUS_POKEMON = "PREVIOUS_POKEMON";
export const MIN_POKEMON_ID = "MIN_POKEMON_ID";
export const MAX_POKEMON_ID = "MAX_POKEMON_ID";

export const getPokemon = (pokemonId) => (dispatch) => {
  dispatch(fetchStart());
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((resp) => {
      console.log("axios call", resp);
      dispatch(fetchSuccess(resp.data));
    })
    .catch((err) => {
      dispatch(fetchFail("Sorry, looks like you're not experienced enough to view this pokemon. Try the next one.", err));
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
export const minPokemonId = () => {
  return { type: MIN_POKEMON_ID };
};
