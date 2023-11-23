import './teaset.css';

function Cup({guest})
{
    return <div className="container-teaset-exe3"><h2>Link para saber mais sobre o Smilinguido e sua turma: #{guest}</h2></div>;
}

export default function TeaSet()
{
    return(
        <>
            <Cup guest={'1 - https://smilinguido.com.br/nossa-turminha/'}/>
            <Cup guest={'2 - https://www.dentrodahistoria.com.br/blog/entretenimento-e-diversao/personagens-smilinguido/'}/>
        </>
    );
}