import './index.scss';

import EstilosRoupas from '../../core/components/estilosRoupas';
import Rodape from '../../core/components/rodape';


export default function Tecnologia(){


let iniciantesEstilos = [
    {
        fundoimagem: '/assets/images/img_tecnologia.png',
        titulo: 'COSTURA E TECNOLOGIA: NOVOS GADGETS PARA COSTUREIROS'
    }
]

    return (

        <div className='page-tecnologia'>

            <div className='container-inicio-tecnologia'>
                {iniciantesEstilos.map(item =>
                    <EstilosRoupas
                        fundoimagem={item.fundoimagem}
                        titulo={item.titulo}
                    />
                )}
            </div>

            <div className="descricao-tecnologia">

                <h1>Máquinas de Costura Inteligentes</h1>

                <p>Com conectividade Wi-Fi, essas máquinas permitem baixar padrões e criar designs personalizados, facilitando a costura.</p>

                <h1>Cortadores Elétricos</h1>

                <p>Cortadores elétricos oferecem precisão e rapidez no corte de tecidos, economizando tempo e esforço, ideais para projetos maiores.</p>

                <h1>Impressoras 3D para Acessórios</h1>

                <p>Essas impressoras possibilitam a criação de botões e fivelas personalizadas, trazendo um toque único a suas peças.</p>

                <h1>Aplicativos de Design de Moda</h1>

                <p>Os aplicativos de design de moda são essenciais para costureiros. Eles permitem estilizar roupas, criar padrões e visualizar suas criações em 3D de forma intuitiva. Com bibliotecas de tecidos e simulações, você pode experimentar combinações antes de cortar o tecido, facilitando o processo criativo e reduzindo erros. Esses aplicativos tornam o design acessível e divertido!</p>

            </div>

            <div className="triangulo-tecnologia">
                <img src="/assets/images/triangulo_iniciantes.png" alt="" />
            </div>

            <h1 className='h1-tecnologia'>VEJA MAIS <br /> PUBLICAÇÕES NOSSAS</h1>

            <div className="container-tecnologia">
                <img src="/assets/images/trianguloB_iniciantes.png" alt="" />
            </div>

            <div className='rodape-tecnologia'>
                <Rodape/>
            </div>

        </div>

    )
}