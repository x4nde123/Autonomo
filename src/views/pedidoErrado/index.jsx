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

export default function PedidoErrado(){

let pedidoEstilo = [
    {
        fundoimagem: '/assets/images/img_pedidoErrado.png',
        titulo: 'MEU PEDIDO VEIO ERRADO E AGORA?'
    }
]

let obj = [
    { id: '1', imagem: '/assets/images/img1_inicio.png'},
    { id: '2', imagem: '/assets/images/img2_inicio.png'},
    { id: '3', imagem: '/assets/images/img3_inicio.png'}
  ]

    return (

        <div className="page-pedidoErrado">

            <div className='comp-pedidoErrado'>
                {pedidoEstilo.map(item =>
                    <EstilosRoupas
                        fundoimagem={item.fundoimagem}
                        titulo={item.titulo}
                    />
                )}
            </div>

            <div className="container-pedidoErrado">

                <div className="descricao-pedidoErrado">

                    <h1>Ação Corretiva</h1>
                    <p>Após sua notificação, nossa equipe analisará o problema e fornecerá orientações sobre como devolver o item incorreto e receber o produto correto.</p>

                </div>
                
                <div className="descricao-pedidoErrado">

                    <h1>Prazo para Correção</h1>
                    <p>Faremos o possível para corrigir qualquer erro rapidamente. Agradecemos sua paciência enquanto trabalhamos para resolver a situação!</p>

                </div>

            </div>

            <div className="container-pedidoErrado">

                <div className="descricao-pedidoErrado">

                    <h1>Opções de Troca Rápida</h1>
                    <p>Se preferir, além de receber o produto correto, você pode optar por trocar por um item diferente disponível em nosso estoque. Consulte nossa equipe para verificar as opções.</p>

                </div>

                <div className="descricao-pedidoErrado">

                    <h1>Política de Envio Correto</h1>
                    <p>Na Silk Stitch, nossa prioridade é garantir que todos os pedidos sejam enviados corretamente. Caso receba um produto diferente do solicitado, estamos prontos para ajudar!</p>

                </div>

            </div>

            <div>
                <FaleConosco/>
            </div>

            <Rodape/>

        </div>

    )
}