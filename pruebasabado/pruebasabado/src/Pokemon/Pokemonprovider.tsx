import { ReactNode, createContext } from "react";
import { variablegeneral } from "./Domain/Pokemondomain";
import Getpokemon from "./Hooks/getPokemon";

export interface IPokemonContext {
    pokelist: variablegeneral[];
    pokemon: variablegeneral | undefined;
    getIdPErsona: (url: string) => void;
  
  }
  
  const PokemonContext = createContext({});
  
  export const PokemonProvider = ({ children }: { children: ReactNode }) => {
    const {  Getpokemonfiltrado, PokemonList, Pokemon  } = Getpokemon();
  
    const storage: IPokemonContext = {
      pokelist: PokemonList,
      getIdPErsona:Getpokemonfiltrado,
      pokemon:Pokemon,
    };
  
    return (
      <PokemonContext.Provider value={storage}>
        {children}
      </PokemonContext.Provider>
    );
  };
  
  export default PokemonContext;