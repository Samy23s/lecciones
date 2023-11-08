import { FC } from "react";
import { variablefiltrado } from "./Domain/Pokemondomain";
import { FormProvider, useForm } from "react-hook-form";
import { Pokemonlist } from "./Components/pokemonlist";
import { Pokemocar } from "./Components/pokemoncar";
import { PokemonForm } from "./Components/pokemonform";



export const Pokemon: FC = () => {
    const initialStateForm: variablefiltrado = {
      url: "",
    
     
    };
    debugger;
    const method = useForm<variablefiltrado>({
      defaultValues: initialStateForm,
    });
  
    return (
      <>
        <FormProvider {...method}>
          <div>
            <h2>pokemon page</h2>
           
            <Pokemonlist />
             <Pokemocar />
             <PokemonForm /> 
         
          </div>
        </FormProvider>
      </>
    );
  };
  