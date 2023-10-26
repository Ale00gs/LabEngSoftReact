import { Link } from "react-router-dom";
import Letreiro from "./Letreiro";
import Relogio from "./Relogio";

export default function Atv01() {
  return (
    <div className="App">
      <>
        <h1>React</h1>
        <div className="all-components">
          <div className="relogio-component card">
            <Relogio /> {/* Renderiza o componente Relogio */}
          </div>

          <div className="letreiro-component card">
            <Letreiro /> {/* Renderiza o componente Letreiro */}
          </div>
        </div>
        <div className="button">
          <Link className="link" to="/">Voltar </Link>
        </div>
      </>
    </div>
  );
}
