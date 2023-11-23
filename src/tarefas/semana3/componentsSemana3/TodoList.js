import "./todolist.css";

// const person = {
//     name: 'Faniquita',
    // theme: {
    //     background: 'black',
    //     color: 'pink',
    // }
// }

export default function TodoList(){
    return (
        <div className="container-todolist-exe3">
            <h1 className="todolist-font-exe3">FANIQUITA</h1>
            <img 
            src="https://smilinguido.com.br/wp-content/uploads/2021/08/FANIQUITA-NEW-1.png"
            alt="Faniquita" className="todolist-img-exe3"
            />
            <ul>
                <li>É espoleta, escandalosa e impaciente, também é prestativa, carinhosa e muito animada.</li>
                <li>Seu sonho é ser rainha um dia, pois é a maior fã da rainha Formosa.</li>
                <li>Alegre, Divertida, Espontânea e Sincera</li>
            </ul>
        </div>
    );
}