import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { NotFound } from "./NotFound";

interface Pokemon {
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export function PokemonDetail() {
  const { name } = useParams();
  const [pokemonFound, setPokemonFound] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon>({
    name: "",
    sprites: {
      other: {
        "official-artwork": {
          front_default: "",
        },
      },
    },
  });

  async function fetchPokemonByName() {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      console.log(response.data);
      setPokemon(response.data);
    } catch (error) {
      setPokemonFound(false);
    }
  }

  useEffect(() => {
    fetchPokemonByName();
  }, []);

  if (!pokemonFound) {
    return <NotFound />;
  }
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.other["official-artwork"].front_default} />
      <p>
        Go back to
        <b>
          <Link to="/"> Home</Link>
        </b>
      </p>
    </div>
  );
}
