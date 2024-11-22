import './index.scss';

import EstilosRoupas from '../../core/components/estilosRoupas';
import FaleConosco from '../../core/components/faleConosco';
import Rodape from '../../core/components/rodape';


export default function SobreNos(){

let SobreNosEstilo = [
    {
        fundoimagem: '/assets/images/img_sobrenos.png',
        titulo: 'SOBRE NÓS'
    }
]

    return (

        <div className='page-sobreNos'>
            
            <div className='inicio-sobreNos'>
                {SobreNosEstilo.map(item => 
                    <EstilosRoupas
                        fundoimagem={item.fundoimagem}
                        titulo={item.titulo}
                    />
                )}
            </div>

            <div className='descricoes-sobreNos'>

                <h1>A Criação da Silk Stitch</h1>
                <p>A Silk Stitch nasceu da minha paixão profunda pela costura e do desejo de criar um espaço onde as pessoas pudessem encontrar tanto os melhores materiais quanto o suporte necessário para seus projetos. Como mulher empreendedora, comecei a Silk Stitch com a ideia de proporcionar aos costureiros, sejam eles amadores ou profissionais, uma experiência única e personalizada.</p>

                <h1>Minha Jornada</h1>
                <p>Desde jovem, sempre fui fascinada pelo mundo da costura. Aprendi a costurar com minha avó, que me ensinou a arte com paciência e amor. À medida que cresci, essa paixão se transformou em uma carreira, e eu percebi que queria compartilhar esse amor com o mundo.</p>
                <br />
                <p>Após anos de experiência no setor e trabalhando em diversos projetos, decidi abrir minha própria loja. A Silk Stitch surgiu não apenas como uma loja, mas como um centro para inspirar e apoiar outros que compartilham essa paixão. Com muito trabalho, dedicação e o apoio de minha família e amigos, a Silk Stitch tornou-se uma realidade.</p>

                <h1>Nosso Foco</h1>
                <p>Na Silk Stitch, nosso principal objetivo é oferecer linhas de costura de alta qualidade e serviços especializados para atender às necessidades de nossos clientes. Queremos ser mais do que apenas uma loja de materiais; desejamos ser um parceiro confiável na realização de seus projetos de costura.</p>

                <h1>O que Oferecemos:</h1>
                <p>Linhas de Costura: Selecionamos cuidadosamente uma variedade de linhas de costura para atender a todos os tipos de projetos, desde os mais simples até os mais complexos. <br /> Serviços Personalizados: Oferecemos serviços especializados para garantir que você tenha o suporte necessário, seja para um projeto específico ou para a escolha dos materiais certos.</p>
                
                <h1>Nosso Endereço</h1>
                <p>Estamos localizados em [Seu Endereço Físico], e ficaremos felizes em recebê-lo para ajudá-lo a encontrar tudo o que você precisa para suas criações.</p>
                
                <h1>Agradecimento e Compromisso</h1>
                <p>Agradeço a todos que têm apoiado a Silk Stitch desde o início. Cada cliente, cada projeto e cada feedback contribuem para nosso crescimento e sucesso. Estou animada para continuar a compartilhar minha paixão pela costura e a ajudar você a realizar suas ideias mais criativas.</p>

            </div>

            <div className='compss'>
                <FaleConosco/>  
            </div>

            <Rodape/>

        </div>

    )
}
