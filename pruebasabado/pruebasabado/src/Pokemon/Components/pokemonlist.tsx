import { FC, useContext, useState } from "react";
import { variablegeneral } from "../Domain/Pokemondomain";
import PokemonContext, { IPokemonContext } from "../Pokemonprovider";

export const Pokemonlist: FC = () => {
    const { pokelist } = useContext(PokemonContext) as IPokemonContext;
    const [showResults, setShowResults] = useState(false);
  
    const handleFetchRickList = async () => {
      setShowResults(true);
    };
  
    return (
      <>
        <div className="flex mx-2">
          <div className="border border-red-600">
            {/* Agrega contenido dentro de este div si es necesario */}
          </div>
        </div>
        <button onClick={handleFetchRickList}>
          Mostrar la lista 
        </button>
  
        {showResults && (
          <div className="grid grid-cols-4 gap-3 m-2 bg-gray-600 p-1 rounded-md">
            {pokelist.length > 0 ? (
              pokelist.map((e: variablegeneral, key: number) => (
                <div
                  key={key}
                  className="bg-gray-800 border-4 border-red-600 p-1 rounded-md"
                >
                  <p className="text-white"> url: {e!.url} </p>
                  <img src={e!.url} alt="" className="p-1" />
                  <p className="text-white"> Name: {e!.name} </p>
                  
                  
                </div>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No hay pokemon disponibles.</td>
              </tr>
            )}
          </div>
        )}
      </>
    );
  };