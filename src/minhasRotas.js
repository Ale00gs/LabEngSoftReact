// Na pasta do projeto 
// C:\Users\aluno\meu-app> npm install react-router-dom

// BrowserRouter = componente react que cria rota 
// route = marcação do caminho e do elemento
// routes = tag pai que abraça todas as tags "route" 

//PARA ENTENDER
//Home.js é o menu, componente que constitui a pag html 
//minhasRotas.js especifica para qual rota o arquivo vai (internamente)
//cada arquivo js chama o seu arquivo css, para ficar organizado 

import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from "./Home";
import './index.css';
import Atv01 from "./tarefas/semana1/Atv01";
import Atv02 from "./tarefas/semana2/Atv02";
import Atv03 from "./tarefas/semana3/atv03";
import Atv04 from "./tarefas/semana4/atv04";
import Atv05 from "./tarefas/semana5/atv05";

//Criando o componente minhas rotas
export default function MinhasRotas(){
    // home deve estar no mesmo diretório da raíz
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/atv01" element={<Atv01 />} />
                <Route path="/atv02" element={<Atv02 />} />
                <Route path="/atv03" element={<Atv03 />} />
                <Route path="/atv04" element={<Atv04 />} />
                <Route path="/atv05" element={<Atv05 />} />
            </Routes>
        </BrowserRouter>
    );

}

