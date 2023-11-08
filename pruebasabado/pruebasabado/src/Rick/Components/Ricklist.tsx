import { FC, useContext, useState } from "react";
import RickContext, { IRickContext } from "../Rickprovider";
import { Rickvariablegeneral } from "../Domain/Rickdomain";

export const Ricklist: FC = () => {
  const { Ricklist } = useContext(RickContext) as IRickContext;
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
        Mostrar la lista de los personajes
      </button>

      {showResults && (
        <div className="grid grid-cols-4 gap-3 m-2 bg-gray-600 p-1 rounded-md">
          {Ricklist.length > 0 ? (
            Ricklist.map((e: Rickvariablegeneral, key: number) => (
              <div
                key={key}
                className="bg-gray-800 border-4 border-red-600 p-1 rounded-md"
              >
                <p className="text-white"> Id: {e!.id} </p>
                <p className="text-white"> Name: {e!.name} </p>
                <p className="text-white"> Gender: {e!.gender} </p>
                <img src={e!.image} alt="" className="p-1" />
              </div>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No hay Rick disponibles.</td>
            </tr>
          )}
        </div>
      )}
    </>
  );
};

