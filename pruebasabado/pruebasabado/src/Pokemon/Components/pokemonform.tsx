import { FC, useContext } from "react";
import { useFormContext } from "react-hook-form";
import PokemonContext, { IPokemonContext } from "../Pokemonprovider";
import { variablefiltrado } from "../Domain/Pokemondomain";

export const PokemonForm: FC = () => {
    const { getValues } = useFormContext<variablefiltrado>();
    const { getIdPErsona } = useContext(PokemonContext) as IPokemonContext;
    
    const handlerConsultar = () => {
      const parant = { ...getValues() };
      console.log(parant);
      if (parant.url !== "") {
        getIdPErsona(parant.url);
      } else alert("NO HAY url...!");
    };
  
    const { register } = useFormContext();
    
  
    return (
      <div>
      {/* <InputText title="id" name="id" /> */}
      <input
        type="text"
        {...register('url')}
      
          
      />
      <button onClick={handlerConsultar}>Consultar</button>
    </div>
  );  
  };