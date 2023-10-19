// Na pasta do projeto 
// C:\Users\aluno\meu-app> npm install react-router-dom

// BrowserRouter = componente react que cria rota 
// route = marcação do caminho e do elemento
// routes = tag pai que abraça todas as tags "rout" 

import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from "./Home";
import Atv01 from "./Atv01";
import Atv02 from "./Atv02";


//Criando o componente minhas rotas
export default function MinhasRotas(){
    // home deve estar no mesmo diretório da raíz
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/atv01" element={<Atv01 />} />
                <Route path="/atv02" element={<Atv02 />} />
            </Routes>
        </BrowserRouter>
    );

}
