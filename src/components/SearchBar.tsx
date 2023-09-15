import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the search logic here, e.g., make an API call or update the component state.
    navigate(`/${searchValue}`);
    console.log("Search submitted:", searchValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
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
  );
}
