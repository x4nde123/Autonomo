import './index.scss';

import { useState} from 'react';
import Cabecalho from '../cabecalho';


export default function CompInicio({fundoImagem, tituloDescricao, descricao, FundoVerMais, corVerMais, primeiraImagem, segundaImagem}){
  
  

    return (

        <div className='comp-inicio' id="image1">

          <div className='fundo-inicio'>
            <img src={fundoImagem} alt="" />
          </div>
          
          

          <div className='descricacao-inicio'> 

            <div className='descricao'>
              
              <h1>{tituloDescricao}</h1>

              <h3>{descricao}</h3>

              <div className={`ver-mais ${FundoVerMais}`}>

                <h1 className={corVerMais}>Ver Mais</h1>  

              </div>

            </div>

            <div className='imgs-inicio'>

              <div className='container-img'>
                <img className='img1-inicio' src={primeiraImagem}/>
              </div>

              <div className='container-img2'>
                <img className='img2-inicio' src={segundaImagem}/>
              </div>

            </div>

          </div>

          <div className='pontos'>
            <img src="/assets/images/pontilhados.png" alt="" />
          </div>

          <div className='borrao-inicio'>

            <img src="/assets/images/borrao_inicio.png" alt="" />

          </div>

        </div>

    )
}