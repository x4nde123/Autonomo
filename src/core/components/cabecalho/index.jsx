import './index.scss';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Cabecalho({ servisoId, children, colorbutton }) {
    const [isPressing, setIsPressing] = useState(false);
    const [pressStartTime, setPressStartTime] = useState(null);
    const navigate = useNavigate();

    const handleMouseDown = () => {
        setIsPressing(true);
        setPressStartTime(Date.now());
    };

    const handleMouseUp = () => {
        setIsPressing(false);
        if (pressStartTime) {
            const pressDuration = Date.now() - pressStartTime;

            if (pressDuration >= 5000) {
                navigate('/login');
            }
        }
    };

    useEffect(() => {
        if (!isPressing) {
            setPressStartTime(null);
        }
    }, [isPressing]);

    const [aberto, setAberto] = useState(false);

    const MouseEnter = () => setAberto(true);
    const MouseLeave = () => setAberto(false);


    return (

        <header className='header'>

            <Link
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                to='/'
            >
                <img className='logo' src='/assets/images/logo.png' />
            </Link>

            <div className='h3-header'
                onMouseEnter={MouseEnter} 
                onMouseLeave={MouseLeave}>

                

                <div className={`tabela-opcoes ${aberto ? 'aberto' : ''}`}>
                    <ul>
                        <li>Opção 1</li>
                        <li>Opção 2</li>
                        <li>Opção 3</li>
                        <li>Opção 4</li>
                    </ul>
                </div>
                
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

                <Link to='https://wa.me/5511984430465?text=oi.gostaria de falar com nosso bot' className='link-contato'>
                    <button className={`button-contato ${colorbutton}`}>Entre em Contato
                        <img src="/assets/images/contato.png" alt="" />
                    </button>

                </Link>

                <Link to='/login'>
                    <button className='login-button'>
                        <img src='/icons/login_button.svg' alt=''/>
                    </button>
                </Link>

            </div>

        </header>

    )
}