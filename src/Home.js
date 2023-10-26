import React from "react";
import { Link } from "react-router-dom";
import './App.css';

//arrow function (não estamos usando function)
//usar rotas deixa a aplicação mais segura pois a aplicação fecha o framework e não entrega o arquivo
//dá para usar rotas em qualquer linguagem
//para links externos usamos a e href
//para links internos usamos li e link
const Home = () => {
    return (
        <div className="principal-container">
            <nav className="card-container">
                <ul>
                    <li>
                        <Link to="/Atv01">Atividade 1 - Relógio e Letreiro</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">Atividade 2 - </Link>
                    </li>
                    <li>
                        <Link to="">Atividade 3 - </Link>
                    </li>
                    <li>
                        <Link to="">Atividade 4 - </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;