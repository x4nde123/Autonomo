import './index.scss';


import { Link } from 'react-router-dom';
import FaleConosco from '../../core/components/faleConosco';
import Rodape from '../../core/components/rodape'

export default function Suporte(){



    return (

        <div className="page-suporte">

            <div className='borrao-silkstich'>
                <img src="/assets/images/borrao_branco.png" alt="" />
            </div>

            <header className='header-suporte'>
                
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


                <button className='contato'>

                    <Link to='' className='link-contato'>
                        <h2>Entre em Contato</h2>
                        <img src="/assets/images/contato.png" alt=""/>
                    </Link>

                </button>

            </header>

            <h1 className='h1-suporte'>SUPORTE</h1>

            <div className='container-suporte'>

                <div className='suporte umSuporte'>

                    <h1>Devoluções</h1>

                    <div className='barra-suporte'></div>

                    <div className='descricao-suporte descricaoUm'>
                        <img src="/assets/images/setinha_suporte.png" alt="" />
                        <Link to='/devolucoes' className='link-suporte'>
                            <p>Saiba como trocar ou devolver  um produto e todas as condições</p>
                        </Link>
                    </div>

                </div>

                <div className='suporte doisSuporte'>

                    <h1>Entrega</h1>

                    <div className='barra-suporte'></div>

                    <div className='descricao-suporte descricaoUm'>
                        <img src="/assets/images/setinha_suporte.png" alt="" />
                        <Link to='/pedidoErrado' className='link-suporte'>
                            <p>Meu pedido veio errado</p>
                        </Link>
                    </div>

                    <div className='descricao-suporte'>
                        <img src="/assets/images/setinha_suporte.png" alt="" />
                        <Link to='/naoRecebi' className='link-suporte'>
                            <p>Meu pedido consta como entrege, porém não recebi</p>
                        </Link>
                    </div>

                </div>

            </div>

            <div className='fale-suporte'>
                <FaleConosco/>
            </div>
           
            <Rodape/>
            
        </div>

    )

}