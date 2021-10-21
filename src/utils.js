// bring in all the other helper functions like sweet alert and on pokemon.js
import React from "react";
import Swal from "sweetalert2";
import ProfessorOak from "./components/Pictures/ProfessorOak.png";
import Colors from "./components/Pictures/Colors.jpg";
import SkyColors from "./components/Pictures/SkyColors.jpg";
import useSound from "use-sound";
import PokemonSong from "./components/PokemonSong.mp3";

export const GEN_i_STARTING_ID = 1;
export const GEN_ii_STARTING_ID = 152;
export const GEN_iii_STARTING_ID = 252;
export const GEN_iv_STARTING_ID = 387;
export const GEN_v_STARTING_ID = 494;
export const GEN_vi_STARTING_ID = 650;
export const GEN_vii_STARTING_ID = 722;
export const GEN_viii_STARTING_ID = 810;

export let maxPokemonIdVariable = GEN_ii_STARTING_ID;

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
  const [play, { stop }] = useSound(PokemonSong, { volume: 0.01 });
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
