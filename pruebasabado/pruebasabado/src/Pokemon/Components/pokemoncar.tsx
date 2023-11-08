import { FC, useContext } from "react";
import PokemonContext, { IPokemonContext } from "../Pokemonprovider";
import { PokemonForm } from "./pokemonform";
import { PokemonBoton } from "./Pokemonbutton";

export const Pokemocar: FC = () => {    
    const { pokemon } = useContext(PokemonContext) as IPokemonContext;
    return (
      <>
        <div className="mt-5 flex">
          <div className=" text-center rounded-lg ml-8 cente bg-black border-4 border-red-600 w-52 py-16 ">
            <h2 className="text-white">url: {pokemon?.url} </h2>
            <p className="text-white bg-slate-500 text-center"> Nombre: {pokemon?.name} </p>
            <p className="text-white bg-slate-500 text-center"> url: {pokemon?.location_area_encounters} </p>
            <img src={pokemon?.url} alt="" className="p-1" />
            <p className="text-white">
            </p>         
          </div>
          <div className="flex mx-2">
            <PokemonForm />
            <div className="border border-red-600">
              <PokemonBoton />
            </div>
          </div>
        </div>
      </>
    );
  };