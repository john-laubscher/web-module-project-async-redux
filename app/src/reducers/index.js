import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions";

const initialState = {
  ////do I need to initialize it exactly as it appears in the api?--image url would be under the sprites obj, and both imageurl and pokemonID would have different names

  name: "Bulbasaur",
  imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  pokemonId: 1,
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SUCCESS:
      console.log("fetch success", action.payload);
      return {
        ...state,
        isFetching: false,
        name: action.payload.name,
        pokemonId: action.payload.id,
        imageUrl: action.payload.sprites.front_default,
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
