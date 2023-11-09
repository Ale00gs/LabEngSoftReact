import { Link } from "react-router-dom";
import ComponentCounter from "./componentCounter";

export default function Atv02(){
    
  return(
    <>
      <ComponentCounter />

      <div className="button">
      <Link className="link" to="/"> Voltar </Link>
      </div>
    </>
  );
}