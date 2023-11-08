import { FC } from "react";
import { RickProvider } from "./Rickprovider";
import { Rick } from "./Rick";



export const  Indice: FC = () => {
    return (
      <>
       <RickProvider>
       <Rick/>
        </RickProvider>
      </>
    );
  }
  