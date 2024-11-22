import './index.scss';                                                                         

import EstilosRoupas from '../../core/components/estilosRoupas';
import Rodape from '../../core/components/rodape';
import FaleConosco from '../../core/components/faleConosco';


export default function Diferenciais(){

    let diferenciaisEstilos = [
        {
            fundoimagem: '/assets/images/img1_serviso.jpeg',
            titulo: 'NOSSOS DIFERENCIAIS',
        }
    ]

    return (

        <div className='page-diferenciais'>

            <div className='container-diferenciais'>
                {diferenciaisEstilos.map(item =>
                    <EstilosRoupas
                        fundoimagem={item.fundoimagem}
                        titulo={item.titulo}
                    />
                )}
            </div> 

            <div className='descricoes-diferenciais'>

                <h1>Qualidade dos Materiais</h1>
                <p>Utilizamos tecidos premium e sustentáveis para garantir durabilidade e conforto em cada peça. Cada material é cuidadosamente selecionado para oferecer o melhor em estilo e funcionalidade. A qualidade é nossa prioridade em todos os detalhes.</p>

                <h1>Personalização Completa</h1>
                <p>Oferecemos uma ampla gama de opções de personalização para atender às suas preferências individuais. Desde ajustes precisos a detalhes exclusivos, garantimos que cada peça seja única e feita sob medida para você. Seu estilo é nossa principal inspiração.</p>

                <h1>Atendimento Personalizado</h1>
                <p>Nossa equipe dedica atenção especial a cada cliente para garantir um serviço sob medida e excepcional. Acompanhamos de perto cada etapa do processo para assegurar que suas necessidades e expectativas sejam atendidas. Seu conforto e satisfação são nossa prioridade</p>

                <h1>Design Exclusivo</h1>
                <p>Descrição: Criamos designs únicos que refletem seu estilo pessoal e se destacam pela originalidade. Cada peça é elaborada com atenção aos detalhes para oferecer um visual sofisticado e personalizado. Seu estilo é traduzido em cada design exclusivo que oferecemos.</p>

            </div>

            <div className='fale-conosco-diferenciais'>
                <FaleConosco/>
            </div>

            <Rodape/>

        </div>

    )
} 