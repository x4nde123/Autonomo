import './index.scss';

import { Link } from 'react-router-dom';



export default function InfosDois(props){



    return (

        <div className="container-topicos">

            <div className='imgs'>
                <img src={props.imagem} alt="" />
            </div>

            <div className='descricao'>

                <h1>{props.titulo}</h1>
                <p>{props.descricao}</p>

                <div className='faca-seu-pedido'>
                    <Link to={props.link} className='link-pedido'>{props.nomeLink}</Link>
                </div>

            </div>

        </div>

    )
}