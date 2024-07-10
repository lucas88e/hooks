import "./App.css";
import useApi from "./hooks/useFecthCharacters";
import Card from "./components/Card";
function App() {
  const urlPokemon =
    "https://pokeapi.co/api/v2/pokemon/1";
    const urlPokemon2 =
    "https://pokeapi.co/api/v2/pokemon/2";
  const urlRick =
    "https://rickandmortyapi.com/api/character/1";
  const { data: pokemonData } =
    useApi(urlPokemon);
    const { data: pokemonData2 } =
    useApi(urlPokemon2);
  const { data: rickData } = useApi(urlRick);


  return (
    <>
        <h1>Pokemon Data</h1>
      <Card
        name={pokemonData.name}
        image={
          pokemonData.sprites?.other[
            "official-artwork"
          ].front_default
        }
        alt={pokemonData.name}
      />
        <Card
        name={pokemonData2.name}
        image={
          pokemonData2.sprites?.other[
            "official-artwork"
          ].front_default
        }
        alt={pokemonData2.name}
      />

      
      <h1>Rick Data</h1>

      <Card
        name={rickData.name}
        image={rickData.image}
      />
    </>
  );
}

export default App;
