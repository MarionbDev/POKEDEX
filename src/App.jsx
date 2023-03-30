import { useState } from "react";
import "./App.css";
import MyImage from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

// const pokemon = pokemonList[0];

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);
  const PrecedentHandeleClick = () => {
    setpokemonIndex((precedentState) => precedentState - 1);
  };

  const SuivantHandeleClick = () => {
    setpokemonIndex((suivantState) => suivantState + 1);
  };

  return (
    <div>
      <MyImage pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 && (
        <button onClick={PrecedentHandeleClick}>Précédent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={SuivantHandeleClick}>Suivant</button>
      )}
    </div>
  );
}

export default App;
