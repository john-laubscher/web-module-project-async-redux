// bring in all the other helper functions like sweet alert and on pokemon.js
import React from "react";
import Swal from "sweetalert2";
import ProfessorOak from "./components/Pictures/ProfessorOak.png";
import Colors from "./components/Pictures/Colors.jpg";
import SkyColors from "./components/Pictures/SkyColors.jpg";
import useSound from "use-sound";
import PokemonSong from "./components/PokemonSong.mp3";

export const GEN_i_ENDING_ID = 151;
export const GEN_ii_ENDING_ID = 251;
export const GEN_iii_ENDING_ID = 386;
export const GEN_iv_ENDING_ID = 493;
export const GEN_v_ENDING_ID = 649;
export const GEN_vi_ENDING_ID = 721;
export const GEN_vii_ENDING_ID = 809;
export const GEN_viii_ENDING_ID = 898;

export let maxPokemonIdVariable = GEN_viii_ENDING_ID;

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

export const welcomeSweetAlert = () => {
  // PlaySound();
  Swal.fire({
    title: "Welcome to the world of Pokémon!",
    imageUrl: ProfessorOak,
    imageHeight: 250,
    imageAlt: "Professor Oak",
    text: " Please enjoy my completed Pokédex by searching for your favorite Pokémon.",
    background: `no-repeat url(${SkyColors})`,
    backdrop: "rgba(250, 223, 218, 0.8)",
  });
};

export const PlaySound = () => {
  const [play, { stop }] = useSound(PokemonSong, { volume: 0.03 });
  const [isPlaying, setIsPlaying] = React.useState(false);
  const clickButton = () => {
    if (!isPlaying) {
      play();
      setIsPlaying(true);
    } else {
      stop();
      setIsPlaying(false);
    }
  };
  return <button onClick={clickButton}>Play Sound!</button>;
};
