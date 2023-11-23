import { Link } from "react-router-dom";
import Calculadora from "./Calculadora"
import "./atv04.css";

export default function Atv04() {
  return (
    <>
      <Calculadora />
      <div className="bg-exe4-button">
        <div className="button">
          <Link className="link" to="/">
            {" "}
            Voltar{" "}
          </Link>
        </div>
      </div>
    </>
  );
}