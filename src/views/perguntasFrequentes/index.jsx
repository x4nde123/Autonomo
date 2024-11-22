import FaleConosco from '../../core/components/faleConosco';
import Rodape from '../../core/components/rodape';
import './index.scss';

import { Link } from 'react-router-dom';


export default function PerguntasFrequentes () {
    

    return (

        <div className="page-perguntas">

            <div className='borrao-silkstich'>
                <img src="/assets/images/borrao_branco.png" alt="" />
            </div>

            <header className='header-perguntas'>
                
                <Link className='link-logo' to='/'>
                    <img className='logo2' src='/assets/images/logo-costura.png'/>
                </Link>

                <div className='h3-header'>

                    <Link to='/blog'>
                        <h3>Blog</h3>
                    </Link>

                    <Link to='/sobre'>
                        <h3>Sobre</h3>
                    </Link>

                    <Link to='/suporte'>
                        <h3>Suporte</h3>
                    </Link>

                </div>


                <div className='contato'>

                    <Link to='/contato' className='link-contato'>
                        <h2>Entre em Contato</h2>
                        <img src="/assets/images/contato.png" alt=""/>
                    </Link>

                </div>

            </header>

            <h1 className='perguntas-frequentes'>PERGUNTAS FREQUENTES</h1>

            <div className="descricoes-perguntas">

                <h1>Quais tipos de serviços de costura vocês oferecem?</h1>
                <p>Na SILK STITCH, oferecemos uma ampla gama de serviços de costura, customização, personalização de peças e criação de roupas sob medida. Se você tem uma necessidade específica, entre em contato conosco para discutir suas opções.</p>
                
                <h1>Quais são os prazos para concluir um serviço de costura?</h1>
                <p>O prazo para concluir um serviço de costura pode variar dependendo da complexidade do trabalho e da demanda atual. Em geral, nossos serviços são concluídos em 7 a 14 dias úteis. Para serviços urgentes, oferecemos opções de atendimento prioritário. Entre em contato conosco para obter um prazo estimado baseado em seu projeto específico.</p>

                <h1>Vocês oferecem serviços de costura para empresas?</h1>
                <p>Sim, oferecemos serviços de costura para empresas, incluindo uniformes corporativos, roupas promocionais e personalização de peças para eventos. Entre em contato com nossa equipe de atendimento para discutir as necessidades da sua empresa e receber uma proposta personalizada.</p>

                <h1>Qual é a política de devolução para serviços de costura?</h1>
                <p>Nossos serviços de costura são realizados com a máxima atenção aos detalhes e satisfação do cliente. Se houver um problema com o serviço prestado, entre em contato conosco dentro de 7 dias após a conclusão. Faremos o possível para corrigir qualquer erro ou insatisfação. Não oferecemos devolução de valores, mas oferecemos ajustes adicionais para garantir sua satisfação.</p>

                <h1>Vocês oferecem amostras de tecidos?</h1>
                <p>Sim, oferecemos amostras de tecidos para que você possa verificar a qualidade e o estilo antes de fazer uma compra em grande quantidade. Para solicitar amostras, entre em contato conosco através de contato@silkstitch.com.br e informe os tecidos de seu interesse.</p>

                <h1>Como faço para rastrear meu pedido?</h1>
                <p>Após o envio do seu pedido, você receberá um e-mail com um código de rastreamento e um link para acompanhar a entrega. Você também pode verificar o status do seu pedido na seção "Meus Pedidos" da sua conta em nosso site.</p>

                <h1>Vocês oferecem descontos para compras em grandes quantidades?</h1>
                <p>Sim, oferecemos descontos para compras em grandes quantidades. Se você estiver comprando em grande escala, entre em contato com nossa equipe de vendas para discutir suas necessidades e obter uma cotação personalizada.</p>

                <h1>Como posso saber se um tecido é adequado para o meu projeto?</h1>
                <p>Para garantir que um tecido seja adequado para o seu projeto, verifique a descrição do produto na nossa loja online, que inclui informações sobre composição, largura, peso e recomendações de uso. Se precisar de orientação adicional, nossa equipe de atendimento ao cliente está disponível para ajudá-lo a escolher o tecido certo com base nas suas necessidades específicas.</p>

            </div>

            <div className='compss'>
                <FaleConosco/>
            </div>

            <Rodape/>

        </div>

    )

}