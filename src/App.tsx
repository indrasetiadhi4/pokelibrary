import { useState, useEffect } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { PokemonDetail } from "./components/PokemonDetail";

interface Pokemon {
  sprites: any;
  name: string;
}

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

  const [searchValue, setSearchValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the search logic here, e.g., make an API call or update the component state.
    console.log("Search submitted:", searchValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>PokeLibrary</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search Pokemon"
                  value={searchValue}
                  onChange={handleChange}
                />
              </form>
            </>
          }
        />

        <Route path="/:name" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
