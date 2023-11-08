import { FC } from "react";
import { PokemonProvider } from "./Pokemonprovider";
import { Pokemon } from "./Pokemon";

export const  Indice2pokemon: FC = () => {
    return (
      <>
       <PokemonProvider>
       <Pokemon/>
        </PokemonProvider>
      </>
    );
  }
  