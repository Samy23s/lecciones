import { FormProvider, useForm } from "react-hook-form";
import { Rickvariablefiltrado } from "./Domain/Rickdomain";
import { FC } from "react";

import { RickForm } from "./Components/Rickform";
import { Rickcar } from "./Components/Rickcar";

import { Ricklist } from "./Components/Ricklist";


export const Rick: FC = () => {
  const initialStateForm: Rickvariablefiltrado = {
    id: "",
    name: "",
   
  };
  debugger;
  const method = useForm<Rickvariablefiltrado>({
    defaultValues: initialStateForm,
  });

  return (
    <>
      <FormProvider {...method}>
        <div>
          <h2>Rick page</h2>
         
          <RickForm />
           <Rickcar />
           <Ricklist /> 
       
        </div>
      </FormProvider>
    </>
  );
};
