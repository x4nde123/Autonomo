import './index.scss';

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function Rodape({ servisoId, children, colorbutton }){
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

        <div className='rodape'>

            <Link
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                to='/'
            >
          
            </Link>

            <div className='h3-header'
                onMouseEnter={MouseEnter} 
                onMouseLeave={MouseLeave}>

</div>   

          <div className='colunas'>

            <div className='coluna1-rodape'>

              <img className='logo-rodape' src="/assets/images/logo.png" alt="" />
              <h1>Redes Sociais</h1>

              <div className='redes-sociais'>
                <img className='redesSociais-rodape' src="/assets/images/logo_whatsapp.png" alt="" />
                <img className='insta-rodape' src="/assets/images/logo_instagram.png" alt="" />
                <img className='redesSociais-rodape' src="/assets/images/logo_facebook.png" alt="" />
              </div>

            </div>

            <div className='coluna2-rodape'>

              <Link className='Link-rodape' to='/'>
                <h1>Ajuda</h1>
              </Link>

              <Link to= 'https://wa.me/5511984430465?text=oi.gostaria de falar com nosso bot' className='Link-rodape'>
                <h2>Contato</h2>
              </Link>

              <Link onClick={() => {window.scrollTo(0,0)}} className='Link-rodape' to='/sobreNos'>
                <h2>Sobre Nós</h2>
              </Link>

              <Link onClick={() => {window.scrollTo(0,0)}} className='Link-rodape' to='/perguntasFrequentes'>
                <h2>Perguntas Frequentes</h2>
              </Link>

              <Link onClick={() => {window.scrollTo(0,0)}} className='Link-rodape' to='/suporte'>
                <h2>Suporte</h2>
              </Link>

            </div>

            <div className='coluna3-rodape'>

              <h1>Formas de Pagamento</h1>

              <div className='pagamentos'>

                <img className='img-pagamentos' src="/assets/images/mercadoPago.png" alt="" />
                <img className='img-pagamentos' src="/assets/images/Mastercard.png" alt="" />
                <img className='img-pagamentos' src="/assets/images/Visa.png" alt="" />
                <img className='pix' src="/assets/images/pix.png" alt="" />

              </div>

              <div className='contato'>

<Link to='https://wa.me/5511984430465?text=oi.gostaria de falar com nosso bot' className='link-contato'>
    <button className={`button-rodape ${colorbutton}`}>Entre em Contato
        <img src="/assets/images/contato.png" alt="" />
    </button>

</Link>

            </div>

          </div>

        </div>
        </div>
        
        

    )
} 