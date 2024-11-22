import './index.scss';

import EstilosRoupas from '../../core/components/estilosRoupas';
import Cabecalho from '../../core/components/cabecalho';
import TipoRoupas from '../../core/components/tipoRoupas';
import Rodape from '../../core/components/rodape';
import Infos from '../../core/components/infos';

export default function Calcas(){

    let calcasEstilos = [
        {
            fundoimagem: '/assets/images/fundo-calcas.png',
            titulo: 'Calças',
        }
    ]

    let calcas = [
        {
            imagem: '/assets/images/img_calcas1.png',
            titulo: 'CALÇAS JEANS',
            descricao: 'Calças jeans clássicas e duráveis, ideais para o uso diário. Disponíveis em vários cortes e lavagens para um estilo versátil.',
            link: '/',
            caminho: 'Faça seu pedido'
        },

        {
            imagem: '/assets/images/img_calcas2.png',
            titulo: 'CALÇAS DE ALFAIATARIA',
            descricao: 'Calças elegantes e bem ajustadas, perfeitas para ocasiões formais e ambientes de trabalho. Feitas com tecidos de alta qualidade para um ajuste sofisticado.',
            link: '/',
            caminho: 'Faça seu pedido'
        },
        
        {
            imagem: '/assets/images/img_calcas3.png',
            titulo: 'CALÇAS CARGO',
            descricao: 'Calças práticas com múltiplos bolsos, perfeitas para aventuras ao ar livre e um estilo robusto. Feitas com tecidos resistentes e funcionais.',
            link: '/',
            caminho: 'Faça seu pedido'
        },

        {
            imagem: '/assets/images/img_calcas4.png',
            titulo: 'CALÇAS PANTACOURT',
            descricao: 'Calças com comprimento abaixo do joelho e corte amplo, oferecendo um estilo leve e moderno. Perfeitas para climas quentes e looks descontraídos.',
            link: '/',
            caminho: 'Faça seu pedido'
        }
    ]

    return (

        <div className='page-calcas'>


            <div className='calcas-container'>
                {calcasEstilos.map(item => 
                    <EstilosRoupas
                        titulo={item.titulo}
                        fundoimagem={item.fundoimagem}
                    />
                )}
            </div>

            <div className='calcas-container2'>

                <h1 className='titulo-calcas-trendy'>CALÇAS DE TRENDY</h1>

                <p className='descricao-calcas-trendy'>Descubra nossa coleção de moletons, projetados para oferecer conforto e estilo. Com uma variedade de designs e tecidos de alta qualidade, eles são perfeitos para dias relaxados e looks casuais.</p>

                <div className='tipos-calcas'>
                    {calcas.map(comp => 
                        <Infos
                            imagem={comp.imagem}
                            titulo={comp.titulo}
                            descricao={comp.descricao}
                            link={comp.link}
                            caminho={comp.caminho}
                        />
                    )}
                </div>

                <h1 className='titulo-outras-camisetas'>VEJA OUTRAS CATEGORIAS</h1>

                <p className='descricao-outras-camisetas'>Explore nossa ampla gama de categorias e descubra novas opções para <br /> complementar seu estilo. Encontre tudo o que você precisa para um guarda- <br /> roupa completo e diversificado.</p>

                <TipoRoupas/>

                <Rodape/>

            </div>
            
        </div>

    )
}