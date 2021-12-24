import "./App.css";
import React from "react";
import PokemonCard from "./components/Pokemon";
import PokedexLogo from "./components/Pictures/PokedexLogo.png";
import { welcomeSweetAlert } from "./utils";

function App() {
  return (
    <div className="App">
      <img className="PokedexLogo" src={PokedexLogo} alt="Pokedex Logo" />
      {welcomeSweetAlert()}
      <PokemonCard />
    </div>
  );
}

export default App;
