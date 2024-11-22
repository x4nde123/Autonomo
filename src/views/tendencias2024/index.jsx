import './index.scss';

import EstilosRoupas from '../../core/components/estilosRoupas';
import Rodape from '../../core/components/rodape';



export default function Tendencias(){

let tendenciasEstilo = [
    {
        fundoimagem: '/assets/images/img_tendencias.png',
        titulo: 'TENDÊNCIA DE MODA E COSTURA PARA 2024'
    }
]

    return (

        <div className="page-tendencias">

            <div className='container-inicio-tendencias'>
                {tendenciasEstilo.map(item =>
                    <EstilosRoupas
                        fundoimagem={item.fundoimagem}
                        titulo={item.titulo}
                    />
                )}
            </div>

            <div className="descricao-tendencias">

                <h1>Sustentabilidade e Moda Circular</h1>

                <p>Em 2024, a sustentabilidade continuará a ser uma tendência central, com ênfase na moda circular. Os consumidores buscam peças feitas de materiais reciclados e técnicas que prolonguem a vida útil das roupas.</p>

                <h1>Estilo Retrô e Vintage</h1>

                <p>A moda retrô fará um grande retorno, com elementos dos anos 70, 80 e 90 em alta. Peças como blusas oversized e calças de cintura alta estarão em destaque, permitindo uma mistura de estilos contemporâneos com toques nostálgicos.</p>

                <h1>Tecidos Tecnológicos</h1>

                <p>Os tecidos tecnológicos, que oferecem funcionalidades como impermeabilidade e respirabilidade, ganharão espaço em 2024. Essas inovações não apenas aprimoram o conforto, mas também atendem à demanda por praticidade no dia a dia.</p>

                <h1>Personalização e DIY</h1>

                <p>A personalização das peças se tornará uma tendência marcante, com mais pessoas optando por customizar suas roupas. Projetos de "faça você mesmo" (DIY) estarão em alta, permitindo que os indivíduos expressem sua criatividade e estilo pessoal.</p>

            </div>

            <div className="triangulo-tendencias">
                <img src="/assets/images/triangulo_iniciantes.png" alt="" />
            </div>

            <h1 className='h1-tendencias'>VEJA MAIS <br /> PUBLICAÇÕES NOSSAS</h1>

            <div className="container-tendencias">
                <img src="/assets/images/trianguloB_iniciantes.png" alt="" />
            </div>

            <div className='rodape-tendencias'>
                <Rodape/>
            </div>

        </div>

    )

}