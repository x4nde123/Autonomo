import './index.scss';

import { Link } from 'react-router-dom';


export default function Contato(){



    return (

        <div className='page-contato'>

            <div className='contato-container'>

                <header className='cabecalho-contato'>

                    <img src="/assets/images/logo-whatsapp.png" alt="" />

                    <div className='links'>

                        <Link className='link'>Recursos</Link>

                        <Link className='link'>Privacidades</Link>

                        <Link className='link'>Central de Ajuda</Link>

                        <Link className='link'>Blog</Link>

                        <Link className='link'>Para Empresa</Link>

                        <Link to='https://web.whatsapp.com/' className='link'>WhatApp Web</Link>

                    </div>

                    <Link to='https://www.whatsapp.com/download?lang=pt_BR'>
                        <div className='baixar'>
                            <img src="/assets/images/img-baixar.png" alt="" />
                        </div>
                    </Link>

                </header>

                <div className='barra-inicio'></div>


                <div className='contato-container2'>

                    <Link to='/' className='link-costura'>
                        <img src="/assets/images/logo-costura.png" alt="" />
                        <h1>SILK STICH</h1>
                    </Link>

                    <div className='iniciarConversa'>

                        <Link className='link-conversa'>
                            <h2>Iniciar conversa</h2>
                        </Link>

                    </div>

                    <div className='baixar'>

                        <h2>Ainda não tem WhatsApp?</h2>
                        <Link to='https://www.whatsapp.com/download?lang=pt_BR' className='link-baixar'><h3>Baixar</h3></Link>

                    </div>

                </div>
                
            </div>

        </div>

    )

}