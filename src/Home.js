import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

//arrow function (não estamos usando function)
//usar rotas deixa a aplicação mais segura pois a aplicação fecha o framework e não entrega o arquivo
//dá para usar rotas em qualquer linguagem
//para links externos usamos a e href
//para links internos usamos li e link
const Home = () => {
  return (
    <div className="principal-container-home">
      <div>
        <nav className="card-container-home">
          <ul>
            <li>
              <Link to="/Atv01">Atividade 1 - Relógio e Letreiro</Link>
            </li>
            <li>
              <Link to="/Atv02">Atividade 2 - Contador de Pessoas</Link>
            </li>
            <li>
              <Link to="/Atv03">Atividade 3 - Componentes Diversos</Link>
            </li>
            <li>
              <Link to="/Atv04">Atividade 4 - Calculadora</Link>
            </li>
            <li>
              <Link to="/Atv05">Atividade 4 - Jogo da Memória</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
