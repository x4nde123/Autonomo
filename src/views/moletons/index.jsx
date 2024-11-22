import './index.scss';

import Cabecalho from '../../core/components/cabecalho';
import Rodape from '../../core/components/rodape';
import TipoRoupas from '../../core/components/tipoRoupas';
import Infos from '../../core/components/infos';
import EstilosRoupas from '../../core/components/estilosRoupas';

export default function Moletons(){

    let moletons = [
        {
            imagem: '/assets/images/img_moletons1.png',
            titulo: 'MOLETONS COM BORDADO',
            descricao: 'Moletons com bordados detalhados para um toque personalizado e exclusivo. Ideal para quem gosta de detalhes artesanais e únicos.',
            link: '/',
            caminho: 'Faça seu pedido'
        },

        {
            imagem: '/assets/images/img_moletons2.png',
            titulo: 'MOLETONS COM ZIPER',
            descricao: 'Moletons com fechamento em zíper, oferecendo praticidade e ajuste ajustável. Ideal para sobreposições e facilidade ao vestir.',
            link: '/',
            caminho: 'Faça seu pedido'
        },
        
        {
            imagem: '/assets/images/img_moletons3.png',
            titulo: 'MOLETONS COM CAPUZ REMOVÍVEL',
            descricao: 'Moletons versáteis com capuz removível para ajustar o estilo e o conforto conforme necessário. Ideal para mudanças de clima.',
            link: '/',
            caminho: 'Faça seu pedido'
        },

        {
            imagem: '/assets/images/img_moletons4.png',
            titulo: 'MOLETONS DE VELUDO',
            descricao: 'Moletons feitos com tecido de veludo para um toque luxuoso e suave. Ideais para um look sofisticado e confortável.',
            link: '/',
            caminho: 'Faça seu pedido'
        }
    ]

    let moletonsEstilos = [
        {
            fundoimagem: '/assets/images/fundo-camisetas.png',
            titulo: 'MOLETONS',
        }
    ]

    return (

        <div className='page-moletons'>

            <div className='moletons-container'>

                {moletonsEstilos.map(item =>
                    <EstilosRoupas
                        fundoimagem={item.fundoimagem}
                        titulo={item.titulo}
                    />
                )}

            </div>

            <div className='moletons-estilos'>

                <h1 className='titulo-moletons-estilos'>MOELTONS ESTILOSOS E ACOMCHEGANTES</h1>

                <p className='descricao-moletons-estilos'>Descubra nossa coleção de moletons, projetados para oferecer conforto e estilo. Com uma variedade de designs e tecidos de alta qualidade, eles são perfeitos para dias relaxados e looks casuais.</p>

                <div className='tipos-moletons'>


                    {moletons.map(comp => 
                        <Infos
                            imagem={comp.imagem}
                            titulo={comp.titulo}
                            descricao={comp.descricao}
                            link={comp.link}
                            caminho={comp.caminho}
                        />
                    )}

                </div>

                <h1 className='titulo-outros-moletons'>VEJA OUTRAS CATEGORIAS</h1>

                <p className='descricao-outros-moletons'>Explore nossa ampla gama de categorias e descubra novas opções para <br /> complementar seu estilo. Encontre tudo o que você precisa para um guarda- <br /> roupa completo e diversificado.</p>

                <TipoRoupas/>

            </div>

            <Rodape/>

        </div>

    )
}