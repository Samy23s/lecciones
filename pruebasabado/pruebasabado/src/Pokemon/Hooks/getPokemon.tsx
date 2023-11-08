import { useEffect, useState } from "react";
import { variablegeneral } from "../Domain/Pokemondomain";
import axios from "axios";

const Getpokemon = () => {
  const [Pokemon, setPokemon] = useState<variablegeneral>();
  const [PokemonList, setPokemonList] = useState<variablegeneral[]>([]);

  const getpersonalista = async () => {
    const repuesta = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=9"
    );
    const datainfo = repuesta.data;
    setPokemonList(datainfo.results);

  };

  debugger;
  //lista
  useEffect(() => {
    getpersonalista();
  }, []);

  const Getpokemonfiltrado = async (idparame: string) => {
    const respuesta = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + idparame
    );

    console.log(respuesta);
    if (respuesta.data.id === undefined) {
      console.log("NO EXISTE");
      return;
    } else {
      const datainfo = respuesta.data;

      const { name, location_area_encounters, sprites } = datainfo;
      const { back_shiny } = sprites;
      debugger;
      setPokemon({
        url: back_shiny,
        location_area_encounters: location_area_encounters,
        name: name,
        sprites: back_shiny,
      });
    }
  };

  return {
    Getpokemonfiltrado,
    PokemonList,
    Pokemon,
  };
};
export default Getpokemon;
