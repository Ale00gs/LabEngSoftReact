import { Link } from "react-router-dom";
import JogoMemo from "./JogoMemo";
import "./atv05.css";

export default function Atv05() {
  return (
    <>
      <JogoMemo />
      <div className="bg-exe5-button">
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