import { Link } from "react-router-dom";
import Letreiro from "./Letreiro";
import Relogio from "./Relogio";

export default function Atv01(){
    
    return(
        <>
        <h1 className="minhaClasse">Atividade 01</h1>
        <Relogio />
        <Letreiro />
        <Link to="/">Voltar</Link>
        </>
    );
}