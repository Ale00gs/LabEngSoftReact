import { Link } from "react-router-dom";
import ComponentCounter from "./componentCounter";
import "./atv02.css";

export default function Atv02() {
  return (
    <>
      <ComponentCounter />
      <div className="bg-exe2-button">
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
