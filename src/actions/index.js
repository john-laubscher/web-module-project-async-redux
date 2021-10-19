import axios from "axios";
import Swal from "sweetalert2";
import ProfessorOak from "../components/Pictures/ProfessorOak.png";
// import OriginalMap from "../components/Pictures/OriginalMap.png";
import Colors from "../components/Pictures/Colors.jpg";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const NEXT_POKEMON = "NEXT_POKEMON";
export const PREVIOUS_POKEMON = "PREVIOUS_POKEMON";
export const MIN_POKEMON_ID = "MIN_POKEMON_ID";
export const MAX_POKEMON_ID = "MAX_POKEMON_ID";

const searchbarSweetAlert = () => {
  Swal.fire({
    title: "Pokémon not found",
    imageUrl: ProfessorOak,
    imageHeight: 200,
    imageAlt: "Professor Oak",
    text: "Professor Oak: Hmmm, that Pokémon doesn't appear to be in my Pokédex. Please check your spelling or choose one of the original 151 Pokémon",
    background: `no-repeat url(${Colors})`,
  });
};

export const getPokemon = (pokemonId) => (dispatch) => {
  dispatch(fetchStart());
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((resp) => {
      console.log("axios call", resp);
      if (resp.data.id > 151) {
        searchbarSweetAlert();
      } else {
        dispatch(fetchSuccess(resp.data));
      }
    })
    .catch((err) => {
      dispatch(fetchFail(err));
      searchbarSweetAlert();
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
