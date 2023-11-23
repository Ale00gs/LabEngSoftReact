import { people } from './Data';
import { getImageUrl } from './Utils';
import './list.css';

export default function List()
{
    const turma = people.filter(person => 
        person.mostrar === 'turminha');
    const listItems = turma.map(person =>
        <li className='List-exe3'>
            <img 
                src={person.image}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {/* {' '+ person.mostrar + ' '} */}
                 {person.descricao}
            </p>
        </li>
        );
        return <ul>{listItems}</ul>
}