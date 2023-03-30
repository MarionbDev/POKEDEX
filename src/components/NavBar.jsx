import { useEffect } from "react";

function MyNavBar({ setpokemonIndex, pokemonIndex, pokemonList }) {
  useEffect(() => {
    if (pokemonList[pokemonIndex].name === "pikachu") {
      alert("pika pikachu !!!");
    }
  }, [pokemonIndex]);

  const PrecedentHandeleClick = () => {
    setpokemonIndex((precedentState) => precedentState - 1);
  };

  const SuivantHandeleClick = () => {
    setpokemonIndex((suivantState) => suivantState + 1);
  };

  return (
    <div>
      {pokemonIndex > 0 && (
        <button onClick={PrecedentHandeleClick}>{"Précédent"}</button>
      )}

      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={SuivantHandeleClick}>{"Suivant"}</button>
      )}
    </div>
  );
}

export default MyNavBar;
