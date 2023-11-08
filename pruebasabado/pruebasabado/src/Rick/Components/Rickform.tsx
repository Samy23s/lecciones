import { FC, useContext } from "react";
import RickContext, { IRickContext } from "../Rickprovider";
import { Rickvariablefiltrado } from "../Domain/Rickdomain";
import { useFormContext } from "react-hook-form";
export const RickForm: FC = () => {
  const { getValues } = useFormContext<Rickvariablefiltrado>();
  const { getIdPErsonaRick } = useContext(RickContext) as IRickContext;
  const handlerConsultar = () => {
    console.log("consultar");

  
    const parant = { ...getValues() };
    console.log(parant);
    if (parant.id !== "") {
      getIdPErsonaRick(parant.id);
    } else alert("NO HAY ID...!");
  };

  const { register } = useFormContext();
  

  return (
    <div>
    {/* <InputText title="id" name="id" /> */}
    <input
      type="text"
      {...register('id')}
    
        
    />
    <button onClick={handlerConsultar}>Consultar</button>
  </div>
);  
};