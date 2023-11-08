import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { variablefiltrado } from "../Domain/Pokemondomain";


export const PokemonBoton: FC = () => {
    const { setValue } = useFormContext<variablefiltrado>();
    const prueba = () => {
      console.log("boton funciona");
      setValue("url", "");
    };
  
    return (
      <>
        <div>
          <button
            type="submit"
            className="border bg-blue-600 rounded-lg m-2 p-2"
            onClick={prueba}
          >
          prueba
          </button>
        </div>
      </>
    );
  };