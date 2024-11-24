import { useState } from 'react';
import './index.scss';

import { Link } from 'react-router-dom';
import Avaliacoes from '../../core/components/avaliacao';


export default function Depoimentos(){
    
const [cincoEstrela, setCincoEsrela] = useState([]);
const [quatroEstrela, setQuatroEsrela] = useState([]);
const [tresEstrela, setTresEsrela] = useState([]);
const [duasEstrela, setDuasEsrela] = useState([]);
const [umaEstrela, setUmaEsrela] = useState([]);
const [vetorVazio, setVetorVazio] = useState([]);
const [validation, setValidation] = useState(false);

const x = () => setValidation(false);
const y = () => setValidation(true);

function clinkcincoEstrela(item){
    setCincoEsrela([...cincoEstrela, item])
    setCincoEsrela([...cincoEstrela])
}

function clickQuatroEstrela(itemDois){
    setQuatroEsrela([...quatroEstrela, itemDois])
}

function clickTresEstrela(itemTres){
    setTresEsrela([...tresEstrela, itemTres])
}

function clickDuasEstrela(itemQuatro){
    setDuasEsrela([...duasEstrela, itemQuatro])
}

function clickUmaEstrela(itemCinco){ 
    setUmaEsrela([...umaEstrela, itemCinco])
}

return (

    <div className='page-depoimento'>

        <div className='borrao-silkstich'>
            <img src="/assets/images/borrao_branco.png" alt="" />
        </div>

        <header className='header-depoimentos'>
            
            <Link className='link-logo' to='/'>
                <img className='logo2' src='/assets/images/logo-costura.png'/>
            </Link>

            <div className='h3-header'>

                <Link to='/blog'>
                    <h3>Blog</h3>
                </Link>

                <Link to='/sobreNos'>
                    <h3>Sobre</h3>
                </Link>

                <Link to='/suporte'>
                    <h3>Suporte</h3>
                </Link>

            </div>


            <div className='contato'>

                <Link to='/contato' className='link-contato'>
                    <h2>Entre em Contato</h2>
                    <img src="/assets/images/contato.png" alt=""/>
                </Link>

            </div>

        </header>

        <div className="container-depoimentos">

            <h1>DEPOIMENTOS</h1>

            <div className='container-avaliacoes'>


                <div onClick={clinkcincoEstrela} className='avaliacoes'>
                    <img src="/assets/images/estrela_amarela.png" alt="" />
                    <img src="/assets/images/estrela_amarela.png" alt="" />
                    <img src="/assets/images/estrela_amarela.png" alt="" />
                    <img src="/assets/images/estrela_amarela.png" alt="" />
                    <img src="/assets/images/estrela_amarela.png" alt="" />
                </div>
                
                
                <div onClick={clickQuatroEstrela} className='avaliacoes'>
                    <img src="/assets/images/estrela_amarela.png" alt="" />
                    <img src="/assets/images/estrela_amarela.png" alt="" />
                    <img src="/assets/images/estrela_amarela.png" alt="" />
                    <img src="/assets/images/estrela_amarela.png" alt="" />
                    <img src="/assets/images/estrela_vazia.png" alt="" />
                </div>

                <div onClick={clickTresEstrela} className='avaliacoes'>
                    <img src="/assets/images/estrela_amarela.png" alt="" />
                    <img src="/assets/images/estrela_amarela.png" alt="" />
                    <img src="/assets/images/estrela_amarela.png" alt="" />
                    <img src="/assets/images/estrela_vazia.png" alt="" />
                    <img src="/assets/images/estrela_vazia.png" alt="" />
                </div>

                <div onClick={clickDuasEstrela} className='avaliacoes'>
                    <img src="/assets/images/estrela_amarela.png" alt="" />
                    <img src="/assets/images/estrela_amarela.png" alt="" />
                    <img src="/assets/images/estrela_vazia.png" alt="" />
                    <img src="/assets/images/estrela_vazia.png" alt="" />
                    <img src="/assets/images/estrela_vazia.png" alt="" />
                </div>

                <div onClick={clickUmaEstrela} className='avaliacoes'>
                    <img src="/assets/images/estrela_amarela.png" alt="" />
                    <img src="/assets/images/estrela_vazia.png" alt="" />
                    <img src="/assets/images/estrela_vazia.png" alt="" />
                    <img src="/assets/images/estrela_vazia.png" alt="" />
                    <img src="/assets/images/estrela_vazia.png" alt="" />
                </div>

            </div>

        </div>

 
        <div className='depoimento-mapeado'>
            
            <div className='mapeado'>
                {cincoEstrela.map(item =>
                    <AvaliacaoCincoEstrela/>
                )}
            </div>

            <div className='mapeado'>
                {quatroEstrela.map(itemDois =>
                    <AvaliacaoQuatroEstrela/>
                )}
            </div>

            <div className='mapeado'>
                {tresEstrela.map(itemTres =>
                    <AvaliacaoTresEstrela/>
                )}
            </div>


            <div className='mapeado'>
                {duasEstrela.map(itemQuatro =>
                    <AvaliacaoDuasEstrela/>
                )}
            </div>

            <div className='mapeado'>
                {umaEstrela.map(itemCinco =>
                    <AvaliacaoUmaEstrela/>
                )}  
            </div>

        </div>
      

        <br /><br /><br /><br /><br /><br />

    </div>
    
)
}

function AvaliacaoCincoEstrela(){

    let objCinco =  [
        {
            imagem: '/assets/images/img_avaliacoes.png',
            titulo: 'Mariana Santos',
            descricao: 'Os tecidos são de uma qualidade incrível, estou impressionada!'
        },
        {
            imagem: '',
            titulo: 'Isabela Oliveira',
            descricao: 'Os materiais são luxuosos e impecável vale cada centavo.'
        },
        {
            imagem: '',
            titulo: 'Beatriz Almeida',
            descricao: 'Cada cor é tão vibrante, transformou meus trabalhos de costura.'
        },
        {
            imagem: '',
            titulo: 'André Santos',
            descricao: 'Essa linha é essencial para qualquer costureiro, a entrega foi rápida e o produto chegou perfeito, recomendo a todos!'
        },
        {
            imagem: '',
            titulo: 'Antônio Pereira',
            descricao: 'Comprei uma variedade de tons e estou encantado com a consistência em todos eles'
        }
    ]

    return (

        <div>

            {objCinco.map(item =>
                <Avaliacoes
                    imagem={item.imagem}
                    titulo={item.titulo}
                    descricao={item.descricao}
                />
            )}

        </div>
    )
}

function AvaliacaoQuatroEstrela(){

    let objQuatro =  [
        {
            imagem: '/assets/images/img_avaliacoes.png',
            titulo: 'Mariana Santos',
            descricao: 'Os tecidos são de uma qualidade incrível, estou impressionada!'
        },
        {
            imagem: '',
            titulo: 'Isabela Oliveira',
            descricao: 'Os materiais são luxuosos e impecável vale cada centavo.'
        },
        {
            imagem: '',
            titulo: 'Beatriz Almeida',
            descricao: 'Cada cor é tão vibrante, transformou meus trabalhos de costura.'
        },
        {
            imagem: '',
            titulo: 'André Santos',
            descricao: 'Essa linha é essencial para qualquer costureiro, a entrega foi rápida e o produto chegou perfeito, recomendo a todos!'
        }
    ]

    return (

        <div>

            {objQuatro.map(item =>
                <Avaliacoes
                    imagem={item.imagem}
                    titulo={item.titulo}
                    descricao={item.descricao}
                />
            )}

        </div>
    )
}

function AvaliacaoTresEstrela(){
    
    let objTres =  [
        {
            imagem: '/assets/images/img_avaliacoes.png',
            titulo: 'Mariana Santos',
            descricao: 'Os tecidos são de uma qualidade incrível, estou impressionada!'
        },
        {
            imagem: '',
            titulo: 'Isabela Oliveira',
            descricao: 'Os materiais são luxuosos e impecável vale cada centavo.'
        },
        {
            imagem: '',
            titulo: 'Beatriz Almeida',
            descricao: 'Cada cor é tão vibrante, transformou meus trabalhos de costura.'
        }
    ]

    return (
        
        <div>

            {objTres.map(item =>
                <Avaliacoes
                    imagem={item.imagem}
                    titulo={item.titulo}
                    descricao={item.descricao}
                />
            )}

        </div>

    )
}

function AvaliacaoDuasEstrela(){

    let objDois =  [
        {
            imagem: '/assets/images/img_avaliacoes.png',
            titulo: 'Mariana Santos',
            descricao: 'Os tecidos são de uma qualidade incrível, estou impressionada!'
        },
        {
            imagem: '',
            titulo: 'Isabela Oliveira',
            descricao: 'Os materiais são luxuosos e impecável vale cada centavo.'
        }
    ]

    return (
        
        <div>

            {objDois.map(item =>
                <Avaliacoes
                    imagem={item.imagem}
                    titulo={item.titulo}
                    descricao={item.descricao}
                />
            )}

        </div>

    )
}

function AvaliacaoUmaEstrela(){

    let objUm =  [
        {
            imagem: '/assets/images/img_avaliacoes.png',
            titulo: 'Mariana Santos',
            descricao: 'Os tecidos são de uma qualidade incrível, estou impressionada!'
        }
    ]

    return (
        
        <div>

            {objUm.map(item =>
                <Avaliacoes
                    imagem={item.imagem}
                    titulo={item.titulo}
                    descricao={item.descricao}
                />
            )}

        </div>

    )
}
