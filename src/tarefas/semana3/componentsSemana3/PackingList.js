import "./packinglist.css";

function Item({name, isPacked})
{
    let itemContent = name;
    if (isPacked)
    {
        itemContent = (
            <del>
                {name + "✓"}
            </del>
        );
    }

    return(
        <li className="item">
            {itemContent}
        </li>
    );
}

export default function PackingList()
{
    return(
        <section className="container-packing-exe3">
            <h1>PIRIÁ</h1>
            <img className="packinglist-img-exe3" src="https://smilinguido.com.br/wp-content/uploads/2021/08/PIRIA-08.png" />
            <ul>
                <Item 
                    isPacked={true}
                    name="Triste"
                />
                <Item 
                    isPacked={true}
                    name="Melancólico"
                />
                <Item 
                    isPacked={false}
                    name="ALEGRE"
                />
            </ul>
        </section>
    );
}