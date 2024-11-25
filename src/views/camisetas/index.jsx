import './index.scss';

import Cabecalho from '../../core/components/cabecalho'
import Infos from '../../core/components/infos';
import TipoRoupas from '../../core/components/tipoRoupas';
import Rodape from '../../core/components/rodape';
import EstilosRoupas from '../../core/components/estilosRoupas';
import { Link } from 'react-router-dom';


export default function Camisetas(){



    let camisetas = [
        {
            imagem: '/assets/images/img_camiseta1.avif',
            titulo: 'CAMISETAS BÁSICAS',
            descricao: 'Clássicas e versáteis, nossas camisetas básicas são perfeitas para o uso diário. Feitas com tecidos de alta qualidade, garantem conforto e durabilidade. Disponíveis em várias cores e tamanhos para atender a todas as preferências.',
            link: '/https://wa.me/5511984430465?text=oi.gostaria de falar com nosso bot',
            caminho: 'Faça seu pedido'
        },
        
        {
            imagem: '/assets/images/img_camiseta3.avif',
            titulo: 'CAMISETAS RETRÔ',
            descricao: 'Celebre a história do esporte com nossas camisetas retrô de time. Feitas com alta qualidade e designs autênticos, são ideais para fãs e colecionadores.',
            link: '/https://wa.me/5511984430465?text=oi.gostaria de falar com nosso bot',
            caminho: 'Faça seu pedido'
        },

        {
            imagem: '/assets/images/img_camisetas2.png',
            titulo: 'CAMISETAS MANGA LONGA',
            descricao: 'Perfeitas para dias mais frescos, nossas camisetas de manga longa combinam estilo e conforto. Feitas com tecidos macios e de qualidade, oferecem um ajuste elegante e aconchegante.',
            link: '/https://wa.me/5511984430465?text=oi.gostaria de falar com nosso bot',
            caminho: 'Faça seu pedido'
        },

        {
            imagem: '/assets/images/img_camisetas4.png',
            titulo: 'CAMISETAS PERSONALIZADAS',
            descricao: 'Crie camisetas únicas com estampas ou textos exclusivos. Ideais para eventos especiais, oferecem conforto e um toque pessoal.',
            link: '/https://wa.me/5511984430465?text=oi.gostaria de falar com nosso bot',
            caminho: 'Faça seu pedido'
        }
    ]

    let camisetasEstilos = [
        {
            fundoimagem: '/assets/images/fundo-camisetas.png',
            titulo: 'CAMISETAS',
        }
    ]


    return (

        <div id='camisetas' className='page-camisetas'>

            <div className='camisetas-container'>
                
                {camisetasEstilos.map(item => 
                    <EstilosRoupas
                    fundoimagem={item.fundoimagem}
                    titulo={item.titulo}
                    />
                )}

            </div>

            <div className='camisetas-unicas'>

                <h1 className='titulo-camisetas-unicas'>CAMISETAS ÚNICAS</h1>

                <p className='descricao-camisetas-unicas'>Encontre camisetas personalizadas com designs exclusivos e tecidos premium. Escolha a sua favorita e adicione um toque pessoal ao seu estilo.</p>

                <div className='tipos-camisetas'>

               
                    {camisetas.map(comp => 
                        <Infos
                            imagem={comp.imagem}
                            titulo={comp.titulo}
                            descricao={comp.descricao}
                            link={comp.link = 'https://wa.me/5511984430465?text=oi.gostaria de falar com nosso bot'}  
                            caminho={comp.caminho}
                        />
                    )}
                  
                </div>

                <h1 className='titulo-outras-camisetas'>VEJA OUTRAS CATEGORIAS</h1>

                <p className='descricao-outras-camisetas'>Explore nossa ampla gama de categorias e descubra novas opções para <br /> complementar seu estilo. Encontre tudo o que você precisa para um guarda- <br /> roupa completo e diversificado.</p>

                <TipoRoupas/>

            </div>

                <Rodape/>
        </div>

    )
}