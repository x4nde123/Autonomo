import './index.scss';

import EstilosRoupas from '../../core/components/estilosRoupas';
import Rodape from '../../core/components/rodape';
import Publicacoes from '../../core/components/publicacoes';


export default function TecnicasIniciantes(){

let iniciantesEstilos = [
    {
        fundoimagem: '/assets/images/img_iniciantes.png',
        titulo: 'TÉCNICAS DE COSTURA PARA INICIANTES'
    }
]

    return (

        <div className='page-iniciantes'>

            <div className='container-inicio-iniciantes'>
                {iniciantesEstilos.map(item =>
                    <EstilosRoupas
                        fundoimagem={item.fundoimagem}
                        titulo={item.titulo}
                    />
                )}
            </div>

            <div className="descricao-iniciantes">

                <h1>Ferramentas Essenciais para Costura</h1>

                <p>Para começar, tenha uma máquina de costura, tesouras, alfinetes e fita métrica. Materiais de qualidade garantem um trabalho eficiente e duradouro.</p>

                <h1>Pontos de Costura Básicos</h1>

                <p>Os pontos fundamentais incluem o reto, o zig-zag e o overlock. Pratique em retalhos de tecido até se sentir confortável com cada um.</p>

                <h1>Projetos Simples para Praticar</h1>

                <p>Inicie com projetos como almofadas e bolsas para aplicar suas habilidades. Busque tutoriais online e pratique regularmente para aprimorar sua técnica.</p>

                <h1>Dicas para Organizar o Espaço de Costura</h1>

                <p>Mantenha seu espaço de costura limpo e organizado para maior eficiência. Utilize prateleiras e caixas para armazenar ferramentas e materiais, facilitando o acesso durante o trabalho.</p>

            </div>

            <div className="triangulo-iniciantes">
                <img src="/assets/images/triangulo_iniciantes.png" alt="" />
            </div>

            <h1 className='h1-iniciantes'>VEJA MAIS <br /> PUBLICAÇÕES NOSSAS</h1>

            <div className="container-iniciantes">
                <img src="/assets/images/trianguloB_iniciantes.png" alt="" />
            </div>

            <div className='rodape-iniciantes'>
                <Rodape/>
            </div>

        </div>

    )

}