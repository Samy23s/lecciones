import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Indice } from "./Rick/Indice";
import { Indice2pokemon } from "./Pokemon/Indice2";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/Indice" element={<Indice />} />
        <Route path="/Indice2pokemon" element={<Indice2pokemon />} />
      </Routes>
    </>
  );
}
