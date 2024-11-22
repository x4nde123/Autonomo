import './index.scss';

import EstilosRoupas from '../../core/components/estilosRoupas';
import InfosDois from '../../core/components/infosDois';
import FaleConosco from '../../core/components/faleConosco';
import Rodape from '../../core/components/rodape';

export default function Estilos(){

    let destaquesEstilos = [
        {
            fundoimagem: '/assets/images/img3_serviso.jpeg',
            titulo: 'GALERIA DE ESTILOS',
        }
    ]

    let infos = [
        {
            imagem: '/assets/images/nossos-estilos-um.png',
            titulo: 'ESTILO CASUAL CHIC',
            descricao: 'Conforto e elegância se encontram com peças que combinam praticidade e sofisticação para o dia a dia. Ideal para um visual descontraído, mas com um toque de classe',
            nomeLink: 'Faça seu pedido',
            link: '/'
        },
        {
            imagem: '/assets/images/nossos-estilos-dois.png',
            titulo: 'ESTILO ELEGANTE E FORMAL',
            descricao: 'Looks refinados e impecáveis para ocasiões especiais e eventos formais. Enfatiza cortes clássicos e tecidos luxuosos para um visual sofisticado.',
            nomeLink: 'Faça seu pedido',
            link: '/'
        },
        {
            imagem: '/assets/images/nossos-estilos-tres.png',
            titulo: 'ESTILO STREETWEAR',
            descricao: 'Peças ousadas e contemporâneas que refletem as últimas tendências da moda urbana. Perfeito para um estilo jovem e dinâmico.',
            nomeLink: 'Faça seu pedido',
            link: '/'
        },
        {
            imagem: '/assets/images/nossos-estilos-quatro.png',
            titulo: 'ESTILO RETRÔ',
            descricao: 'Inspiração nas décadas passadas com designs e estampas que remetem aos clássicos. Ideal para quem adora um toque nostálgico e original em seu guarda-roupa.',
            nomeLink: 'Faça seu pedido',
            link: '/'
        }
    ]

    return (

        <div className='page-estilo'>

            <div className='container-estilos'>
                {destaquesEstilos.map(item => 
                    <EstilosRoupas
                        fundoimagem={item.fundoimagem}
                        titulo={item.titulo}
                    />
                )}
            </div>

            <div className="descricao-estilos">

                <h1>O MELHOR DA SEMANA</h1>
                <p>Explore o que há de mais recente em nossos destaques da semana, com uma seleção especial de novidades e informações interessantes.</p>

            </div>

            {infos.map(item =>
                <InfosDois
                    imagem={item.imagem}
                    titulo={item.titulo}
                    descricao={item.descricao}
                    nomeLink={item.nomeLink}
                    link={item.link}
                />
            )}

            <FaleConosco/>

            <Rodape/>


        </div>

    )
}