// bring in all the other helper functions like sweet alert and on pokemon.js
import React from "react";

import Swal from "sweetalert2";
import ProfessorOak from "./components/Pictures/ProfessorOak.png";
import Colors from "./components/Pictures/Colors.jpg";
import SkyColors from "./components/Pictures/SkyColors.jpg";
import useSound from "use-sound";
import PokemonSong from "./components/PokemonSong.mp3";

export const generationInfo = {
  generation_i: { endingId: 151, value: 1 },
  generation_ii: { endingId: 251, value: 2 },
  generation_iii: { endingId: 386, value: 3 },
  generation_iv: { endingId: 493, value: 4 },
  generation_v: { endingId: 649, value: 5 },
  generation_vi: { endingId: 721, value: 6 },
  generation_vii: { endingId: 809, value: 7 },
  generation_viii: { endingId: 898, value: 8 },
};

export const maxPokemonIdVariable = generationInfo.generation_i.endingId;

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
