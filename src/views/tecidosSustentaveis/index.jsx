import './index.scss';

import EstilosRoupas from '../../core/components/estilosRoupas';
import Rodape from '../../core/components/rodape';

export default function Sustentaveis(){

let sustentaveisEstilo = [
    {
        fundoimagem: '/assets/images/img_sustentaveis.png',
        titulo: 'O IMPACTO DOS TECIDOS SUSTENTÁVEIS NA COSTURA'
    }
]

    return (

        <div className="page-sustentaveis">

            <div className='container-inicio-sustentaveis'>
                {sustentaveisEstilo.map(item =>
                    <EstilosRoupas
                        fundoimagem={item.fundoimagem}
                        titulo={item.titulo}
                    />
                )}
            </div>

            <div className="descricao-sustentaveis">

                <h1>Redução do Desperdício Têxtil</h1>

                <p>Tecidos sustentáveis, como algodão orgânico e fibras recicladas, ajudam a minimizar o desperdício têxtil. Isso torna a indústria da moda mais responsável em relação ao meio ambiente.</p>

                <h1>Melhoria da Qualidade das Peças</h1>

                <p>Esses tecidos geralmente oferecem maior durabilidade, resultando em roupas de melhor qualidade. Isso aumenta a satisfação do consumidor e promove uma moda mais sustentável.</p>

                <h1>Valorização da Mão de Obra Local</h1>

                <p>O uso de tecidos sustentáveis pode incentivar a produção local e o comércio justo. Marcas que trabalham com pequenos produtores melhoram as condições de trabalho e fortalecem a economia local.</p>

                <h1>Conscientização do Consumidor</h1>

                <p>A popularidade dos tecidos sustentáveis eleva a conscientização sobre o impacto ambiental da moda. Isso leva os consumidores a optar por práticas mais responsáveis em suas escolhas de compra.</p>

            </div>

            <div className="triangulo-sustentaveis">
                <img src="/assets/images/triangulo_iniciantes.png" alt="" />
            </div>

            <h1 className='h1-sustentaveis'>VEJA MAIS <br /> PUBLICAÇÕES NOSSAS</h1>

            <div className="container-sustentaveis">
                <img src="/assets/images/trianguloB_iniciantes.png" alt="" />
            </div>

            <div className='rodape-sustentaveis'>
                <Rodape/>
            </div>

        </div>

    )
}