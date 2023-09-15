import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
      console.error("Error fetching pokemon:", error);
      throw error;
    }
  }

  useEffect(() => {
    fetchPokemonByName();
  }, []);

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.other["official-artwork"].front_default} />
    </div>
  );
}
