async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.json();
  return data.results;
}

function App() {
  return (
    <div className="app">
      <div>
        <h2>Pokémon</h2>
      </div>
    </div>
  );
}

export default App;
