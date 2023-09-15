import { useState, useEffect } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonDetail } from "./components/PokemonDetail";
import { SearchBar } from "./components/SearchBar";

function App() {
  // const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // async function fetchPokemons() {
  //   try {
  //     const response = await axios.get(
  //       "https://pokeapi.co/api/v2/pokemon?limit=1500"
  //     );
  //     console.log(response.data.results);
  //     setPokemons(response.data.results);
  //   } catch (error) {
  //     console.error("Error fetching pokemons:", error);
  //     throw error;
  //   }
  // }

  // useEffect(() => {
  //   fetchPokemons();
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/:name" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
