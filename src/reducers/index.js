import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, NEXT_POKEMON, PREVIOUS_POKEMON, MIN_POKEMON_ID, MAX_POKEMON_ID, SET_CURRENT_GENERATION } from "../actions";
import { generationInfo } from "../utils";

const initialState = {
  name: "Bulbasaur",
  imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  pokemonId: 1,
  isFetching: false,
  types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
  error: "",
  past_types: [],
  currentGeneration: "generation_i",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        name: action.payload.name,
        pokemonId: action.payload.id,
        imageUrl: action.payload.sprites.other["official-artwork"].front_default,
        types: action.payload.types,
        past_types: action.payload.past_types,
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case NEXT_POKEMON:
      return {
        ...state,
        pokemonId: state.pokemonId + 1,
      };
    case PREVIOUS_POKEMON:
      return {
        ...state,
        pokemonId: state.pokemonId - 1,
      };
    case MIN_POKEMON_ID:
      return {
        ...state,
        pokemonId: action.payload,
      };
    case MAX_POKEMON_ID:
      return {
        ...state,
        pokemonId: 1,
      };
    case SET_CURRENT_GENERATION:
      return {
        ...state,
        currentGeneration: action.payload,
        pokemonId: generationInfo[action.payload].startingId,
      };
    default:
      return state;
  }
};
