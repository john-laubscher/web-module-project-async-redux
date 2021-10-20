// maxPokedexId = 151
// bring in all the other helper functions like sweet alert and on pokemon.js
import Swal from "sweetalert2";
import ProfessorOak from "./components/Pictures/ProfessorOak.png";
import Colors from "./components/Pictures/Colors.jpg";

export const maxPokemonVariable = 151;

export const searchbarSweetAlert = () => {
  Swal.fire({
    title: "Pokémon not found",
    imageUrl: ProfessorOak,
    imageHeight: 200,
    imageAlt: "Professor Oak",
    text: "Professor Oak: Hmmm, that Pokémon doesn't appear to be in my Pokédex. Please check your spelling or choose one of the original 151 Pokémon",
    background: `no-repeat url(${Colors})`,
  });
};
