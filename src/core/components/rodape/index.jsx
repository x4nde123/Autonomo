import './index.scss';
import { Link } from 'react-router-dom';


export default function Rodape(){





    return (

        <div className='rodape'>

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

              <Link onClick={() => {window.scrollTo(0,0)}} className='Link-rodape' to='/'>
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

              <div className='entre-em-contato-rodape'>
                <Link className='Link-rodape'>
                  <button className='button-rodape'>Entre em contato</button>
                </Link>
              </div>

            </div>

          </div>

        </div>

    )
} 