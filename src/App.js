import "./App.css";
import React from "react";
import Pokemon from "./components/Pokemon";
import PokedexLogo from "./components/Pictures/PokedexLogo.png";

function App() {
  return (
    <div className="App">
      <img className="PokedexLogo" src={PokedexLogo} alt="Pokedex Logo" />
      <Pokemon />
    </div>
  );
}

export default App;
