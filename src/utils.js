import React from "react";
import Swal from "sweetalert2";
import ProfessorOak from "./components/Pictures/ProfessorOak.png";
import Colors from "./components/Pictures/BackgroundColors/Colors.jpg";
import SkyColors from "./components/Pictures/BackgroundColors/SkyColors.jpg";
import useSound from "use-sound";
import PokemonSong from "./components/PokemonSong.mp3";

export const generationInfo = {
  generation_i: { startingId: 1, endingId: 151, value: 1 },
  generation_ii: { startingId: 152, endingId: 251, value: 2 },
  generation_iii: { startingId: 252, endingId: 386, value: 3 },
  generation_iv: { startingId: 387, endingId: 493, value: 4 },
  generation_v: { startingId: 494, endingId: 649, value: 5 },
  generation_vi: { startingId: 650, endingId: 721, value: 6 },
  generation_vii: { startingId: 722, endingId: 809, value: 7 },
  generation_viii: { startingId: 810, endingId: 898, value: 8 },
};

export const pokemonNotFoundSweetAlert = () => {
  Swal.fire({
    title: "Pokémon not found",
    imageUrl: ProfessorOak,
    imageHeight: 200,
    imageAlt: "Professor Oak",
    text: "Professor Oak: Hmmm, that Pokémon doesn't appear to be in my Pokédex. Please check your spelling or choose one up to your selected generation",
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
    text: "Please enjoy my completed Pokédex by searching for your favorite Pokémon.",
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

  const determinePlaySoundText = () => {
    if (!isPlaying) {
      return "Play Music!";
    } else {
      return "Stop Music";
    }
  };

  return (
    <button className="playSoundButton" onClick={clickButton}>
      {determinePlaySoundText()}
    </button>
  );
};
