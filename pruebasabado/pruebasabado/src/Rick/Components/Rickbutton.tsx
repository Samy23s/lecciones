import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Rickvariablefiltrado } from "../Domain/Rickdomain";

export const RickMortyBoton: FC = () => {
  const { setValue } = useFormContext<Rickvariablefiltrado>();
  const prueba = () => {
    console.log("boton funciona");
    setValue("id", "");
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
