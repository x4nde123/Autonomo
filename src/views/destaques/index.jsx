import './index.scss';

import { Link } from 'react-router-dom';
import EstilosRoupas from '../../core/components/estilosRoupas'
import FaleConosco from '../../core/components/faleConosco';
import Rodape from '../../core/components/rodape';
import InfosDois from '../../core/components/infosDois';

export default function Destaques(){

    let destaquesEstilos = [
        {
            fundoimagem: '/assets/images/img2_serviso.jpeg',
            titulo: 'DESTAQUES DA SEMANA',
        }
    ]

    let infos = [
        {
            imagem: '/assets/images/melhor-da-semana1.png',
            titulo: 'LANÇAMENTO DE COLEÇÃO',
            descricao: 'Conheça nossa nova coleção, com designs inovadores e tecidos premium. Cada peça é pensada para oferecer estilo e conforto excepcionais.',
            nomeLink: 'Faça seu pedido',
            link: ''
        },
        {
            imagem: '/assets/images/melhor-da-semana2.png',
            titulo: 'DICAS DE ESTILO DA SEMANA',
            descricao: 'Confira as melhores dicas de estilo para atualizar seu visual com peças-chave.',
            nomeLink: 'Faça seu pedido',
            link: ''
        },
        {
            imagem: '/assets/images/melhor-da-semana3.png',
            titulo: 'DESAFIO DA SEMANA',
            descricao: ' Participe do nosso desafio de moda e mostre como você usa nossas peças de forma criativa.',
            nomeLink: 'Faça seu pedido',
            link: ''
        },
        {
            imagem: '/assets/images/melhor-da-semana4.png',
            titulo: 'PEÇA DA SEMANA',
            descricao: ' Conheça a peça da semana, selecionada por sua inovação e estilo marcante. Veja o que a torna especial e como ela pode transformar seu visual.',
            nomeLink: 'Faça seu pedido',
            link: ''
        }
    ]

    return (

        <div className='page-destaques'>

            <div className='container-destaques'>
                {destaquesEstilos.map(item =>
                    <EstilosRoupas
                        fundoimagem={item.fundoimagem}
                        titulo={item.titulo}
                    />
                )}
            </div>

            <div className="descricao-destaques">

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