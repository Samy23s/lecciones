import axios from "axios";
import { Rickvariablegeneral } from "../Domain/Rickdomain";
import { useEffect, useState } from "react";

const GetRick = () => {
  const [Rick, setRick] = useState<Rickvariablegeneral>();
  const [rickList, setrickList] = useState<Rickvariablegeneral[]>([]);

  const getpersonalista = async () => {
    const repuesta = await axios.get(
      "https://rickandmortyapi.com/api/character/"
    );
    const datainfo = repuesta.data;
    setrickList(datainfo.results);
  };


  //lista
  useEffect(() => {
    getpersonalista();
  }, []);


  const GetRickfiltrado = async (idparame: string) => {
     const respuesta = await axios.get(
      "https://rickandmortyapi.com/api/character/" + idparame
    );
     console.log(respuesta);
    if (respuesta.data.id === undefined) {
      console.log("NO EXISTE");
      return;
    } else {
      const datainfo = respuesta.data;
      const { id, name, gender, image } = datainfo;
      setRick({ id, name, gender, image });
      debugger;

     }
  };

  return {
    GetRickfiltrado,
    rickList,
    Rick,
  };
};
export default GetRick;
