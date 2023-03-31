function MyNavBar({ setpokemonIndex, pokemonIndex, pokemonList }) {
  // const handleButtonClick = () => {
  //   setpokemonIndex((precedentState) => precedentState - 1);
  // };

  // const andleButtonClick = () => {
  //   setpokemonIndex((suivantState) => suivantState + 1);
  // };

  const handleButtonClick = (positionPoke) => {
    setpokemonIndex(positionPoke);
  };

  return (
    <div>
      {pokemonList.map((pokemon, positionPoke) => (
        <button
          key={positionPoke}
          onClick={() => handleButtonClick(positionPoke)}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}
export default MyNavBar;
