import './index.scss';

import EstilosRoupas from '../../core/components/estilosRoupas';
import Rodape from '../../core/components/rodape';

import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos/dist/aos.css'
import FaleConosco from '../../core/components/faleConosco';

register();

export default function NaoRecebi(){

let recebiEstilo = [
    {
        fundoimagem: '/assets/images/naoRecebi.png',
        titulo: 'MEU PEDIDO CONSTA COMO ENTREGUE MAS NÃO RECEBI'
    }
]

let obj = [
    { id: '1', imagem: '/assets/images/img1_inicio.png'},
    { id: '2', imagem: '/assets/images/img2_inicio.png'},
    { id: '3', imagem: '/assets/images/img3_inicio.png'}
  ]

    return (

        <div className="page-naoRecebi">

            <div className='comp-naoRecebi'>
                {recebiEstilo.map(item =>
                    <EstilosRoupas
                        fundoimagem={item.fundoimagem}
                        titulo={item.titulo}
                    />
                )}
            </div>

            <div className="container-naoRecebi">

                <div className="descricao-naoRecebi">

                    <h1>Verificação dos Detalhes de Entrega</h1>
                    <p>Antes de qualquer coisa, confirme o endereço de entrega que foi fornecido no seu pedido. Verifique se há algum aviso de entrega deixado pelo transportador.</p>

                </div>
                
                <div className="descricao-naoRecebi">

                    <h1>Entre em Contato Conosco</h1>
                    <p>Se, após essas verificações, você ainda não localizou seu pedido, entre em contato com nossa equipe de atendimento ao cliente pelo e-mail [seu-email@silkstitch.com]. Forneça seu número de pedido e qualquer detalhe relevante para que possamos ajudar.</p>

                </div>

            </div>

            <div className="container-naoRecebi">

                <div className="descricao-naoRecebi">

                    <h1>Investigação do Pedido</h1>
                    <p>Após receber sua solicitação, nossa equipe investigará a situação e entrará em contato com você para fornecer atualizações e assistência.</p>

                </div>

                <div className="descricao-naoRecebi">

                    <h1>Registro de Ocorrências</h1>
                    <p>Se o pacote realmente não for encontrado, ajudaremos a registrar a ocorrência com a transportadora para que possamos buscar uma solução rápida para o seu problema.</p>

                </div>

            </div>

            <div>
                <FaleConosco/>
            </div>

            <Rodape/>

        </div>

    )
}