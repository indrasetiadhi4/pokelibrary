import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonDetail } from "./components/PokemonDetail";
import { SearchBar } from "./components/SearchBar";

function App() {
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
