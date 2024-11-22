import './index.scss';



export default function Avaliacoes(props){


    return (

        <div className='comp-depoimentos'>

            <div className='depoimentos'>
                <h1>{props.titulo}</h1>
                <h2>{props.descricao}</h2>
            </div>
            
        </div>

    )
}