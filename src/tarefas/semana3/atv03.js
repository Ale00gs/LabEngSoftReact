// Um componente React é uma função JavaScript que você pode polvilhar com marcação

// >>> IMPORTANTE
// Os componentes podem renderizar outros componentes, mas você nunca deve
// aninhar suas definições pois fica muito lento e causa bugs.

// exemplo:
// export default function Gallery() {
//   function Profile(){}
// }

import { Link } from "react-router-dom";
import Gallery from "./componentsSemana3/Gallery.js";
import { Profile } from "./componentsSemana3/Gallery.js";
import Avatar from "./componentsSemana3/Avatar.js";
import TodoList from "./componentsSemana3/TodoList.js";
import Card from "./componentsSemana3/Profile.js";
import PackingList from "./componentsSemana3/PackingList.js";
import List from "./componentsSemana3/List.js";
import TeaSet from "./componentsSemana3/TeaSet.js";
import TeaGathering from "./componentsSemana3/TeaGathering.js";
import "./atv03.css";

export default function Atividade03() {
  return (
    <div className="bg-exe3">
      <div className="card-exe3">
        <h1 className="title-exe3">Atividade 03 - Componentes Diversos</h1>
        
        {/* <Profile /> */}
        <Card />
        <Gallery />
        <TodoList />
        <PackingList />
        <List />
        <TeaSet />
        {/* <TeaGathering /> */}
     

        <Link className="link" to="/">
          {" "}
          Voltar{" "}
        </Link>
      </div>
    </div>
  );
}
