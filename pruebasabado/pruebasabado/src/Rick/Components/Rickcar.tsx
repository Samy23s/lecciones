import { FC, useContext } from "react";
import RickContext, { IRickContext } from "../Rickprovider";
import { RickForm } from "./Rickform";
import { RickMortyBoton } from "./Rickbutton";

export const Rickcar: FC = () => {
    const { RIck } = useContext(RickContext) as IRickContext;
    return (
      <>
        <div className="mt-5 flex">
          <div className=" text-center rounded-lg ml-8 cente bg-black border-4 border-red-600 w-52 py-16 ">
            <h2 className="text-white">id: {RIck?.id} </h2>
            <p className="text-white bg-slate-500 text-center"> Nombre: {RIck?.name} </p>
            <p className="text-white">
            <img src={RIck?.image} alt="" className="p-1" />
              Genero:
              {RIck?.gender === "Male" ? "Masculino" : "Femenino"}
            </p>
            {/*<p className="text-white">Peso: {pokemon?.sprites} </p>*/}
  

          </div>
          <div className="flex mx-2">
            <RickForm />
            <div className="border border-red-600">
              <RickMortyBoton />
            </div>
          </div>
        </div>
      </>
    );
  };