import './index.scss';
import { Link } from 'react-router-dom';




export default function FaleConosco(){



    return (

        <div className="fale-conosco">

            <h1 className='h1-fale-conosco'>FALE CONOSCO</h1>

            <p>Entre em contato para esclarecer dúvidas, realizar pedidos ou <br /> obter assistência personalizada.</p>

            <div className='fale-conosco-contato'>

                <div className='contato-diferenciais'>
                    <Link to = 'https://wa.me/5511984430465?text=oi.gostaria de falar com nosso bot'><h1>Entre em contato</h1></Link>
                </div>

                <img src="/assets/images/img_telefone.png" alt="" />

            </div>

        </div>

    )
}