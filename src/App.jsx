import { useEffect, useState } from "react";

async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.json();
  return data.results;
}

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
  fetchPokemon().then((result) => {
    console.log("Requisição realizada");
    console.log(result);
    setPokemon(result);
  });
}, []);

  return (
    <div className="app">
      <div>
        <h2>Pokémon</h2>
        {JSON.stringify(pokemon)}
      </div>
    </div>
  );
}

export default App;
