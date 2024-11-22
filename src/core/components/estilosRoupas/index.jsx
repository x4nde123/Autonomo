import './index.scss';

import Cabecalho from '../cabecalho';

export default function EstilosRoupas(props){
    


    return (

        <div className='comp-estilos'>

            <div className='fundo-img'>

                <img className='img' src={props.fundoimagem} alt="" />

            </div>

            <div className='estilos-container'>

                <div>
                    <Cabecalho/>
                </div>

                <div className='container-h1'>
                    <h1>{props.titulo}</h1>
                </div>

                <div className='borrao'>
                    <img src="/assets/images/borrao_inicio.png" alt="" />
                </div>

                
            </div>

        </div>
        
    )
}