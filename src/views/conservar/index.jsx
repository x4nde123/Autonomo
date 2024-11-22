import './index.scss';

import EstilosRoupas from '../../core/components/estilosRoupas';
import Rodape from '../../core/components/rodape';


export default function Conservar(){


let iniciantesEstilos = [
    {
        fundoimagem: '/assets/images/img_conservar.png',
        titulo: 'COMO CONSERVAR E ORGANIZAR SEUS TECIDOS'
    }
]

    return (

        <div className='page-conservar'>

            <div className='container-inicio-conservar'>
                {iniciantesEstilos.map(item =>
                    <EstilosRoupas
                        fundoimagem={item.fundoimagem}
                        titulo={item.titulo}
                    />
                )}
            </div>

            <div className="descricao-conservar">

                <h1>Armazenamento Adequado</h1>

                <p>Guarde seus tecidos em locais frescos e secos, longe da luz solar direta. Utilize caixas plásticas ou sacos de tecido para proteger contra poeira e umidade, evitando danos ao material.</p>

                <h1>Dobra e Enrolamento</h1>

                <p>Dobre os tecidos de forma organizada ou enrole-os para evitar vincos. Armazená-los em prateleiras ou gavetas permite fácil acesso e visualização, facilitando a escolha na hora de costurar.</p>

                <h1>Rotulagem</h1>

                <p>Rotule suas caixas ou prateleiras com o tipo e a quantidade de tecido. Isso ajuda a localizar rapidamente o que você precisa e mantém a organização, economizando tempo em projetos futuros.</p>

                <h1>Manutenção Regular</h1>

                <p>Realize uma verificação periódica dos tecidos armazenados para identificar sinais de mofo ou danos. Mantenha a área de armazenamento limpa e arejada para garantir a durabilidade dos materiais.</p>

            </div>

            <div className="triangulo-conservar">
                <img src="/assets/images/triangulo_iniciantes.png" alt="" />
            </div>

            <h1 className='h1-conservar'>VEJA MAIS <br /> PUBLICAÇÕES NOSSAS</h1>

            <div className="container-conservar">
                <img src="/assets/images/trianguloB_iniciantes.png" alt="" />
            </div>

            <div className='rodape-conservar'>
                <Rodape/>
            </div>

        </div>

    )
}