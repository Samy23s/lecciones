import { ReactNode, createContext } from "react";
import { Rickvariablegeneral } from "./Domain/Rickdomain";
import GetRick from "./Hooks/getrick";

export interface IRickContext {
 
  RIck: Rickvariablegeneral | undefined;
  Ricklist: Rickvariablegeneral[];
  getIdPErsonaRick: (id: string) => void;
}

const RickContext = createContext({});
export const RickProvider = ({ children }: { children: ReactNode }) => {
  const { GetRickfiltrado, rickList, Rick } = GetRick();

  const storage: IRickContext = {
    Ricklist: rickList,
    getIdPErsonaRick: GetRickfiltrado,
    RIck: Rick,
  };

  return (
    <RickContext.Provider value={storage}>{children}</RickContext.Provider>
  );
};

export default RickContext;
