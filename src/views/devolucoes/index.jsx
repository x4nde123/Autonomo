import './index.scss';

import EstilosRoupas from '../../core/components/estilosRoupas';
import FaleConosco from '../../core/components/faleConosco';
import Rodape from '../../core/components/rodape';


export default function Devolucoes(){

let devolucoesEstilos = [
    {
        fundoimagem: '/assets/images/img_devolucoes.png',
        titulo: 'TROCA E DEVOLUÇÃO'
    }
]

    return (

        <div className="page-devolucoes">

            <div className='comp-devolucoes'>
                {devolucoesEstilos.map(item =>
                    <EstilosRoupas
                        fundoimagem={item.fundoimagem}
                        titulo={item.titulo}
                    />
                )}
            </div>

            <div className="container-devolucoes">

                <div className="descricao-devolucoes">

                    <h1>Política de Troca</h1>
                    <p>Na Silk Stitch, garantimos sua satisfação! Você pode solicitar a troca de produtos dentro de 7 dias após o recebimento.</p>

                </div>

                <div className="descricao-devolucoes">

                    <h1>Condições do Produto para Troca</h1>
                    <p>Para que a troca seja aceita, o produto deve estar em perfeito estado, sem sinais de uso e em sua embalagem original.</p>

                </div>

            </div>

            <div className="container-devolucoes">

                <div className="descricao-devolucoes">

                    <h1>Processo de Troca</h1>
                    <p>Para iniciar o processo de troca, entre em contato com nossa equipe de atendimento ao cliente pelo e-mail [seu-email@silkstitch.com]. Informe seu número do pedido e os detalhes do item que deseja trocar.</p>

                </div>

                <div className="descricao-devolucoes">

                    <h1>Atendimento ao Cliente</h1>
                    <p>Estamos aqui para ajudar! Se tiver alguma dúvida ou precisar de assistência, entre em contato conosco pelo e-mail [seu-email@silkstitch.com.</p>

                </div>

            </div>

            <div className="container-devolucoes">

                <div className="descricao-devolucoes">

                    <h1>Frete para Trocas</h1>
                    <p>O custo do frete para envio do produto para troca é de responsabilidade do cliente. Recomendamos utilizar um serviço de rastreamento para garantir a segurança do envio. Em caso de dúvidas, nossa equipe está à disposição para ajudar!</p>

                </div>

            </div>

            <div>
                <FaleConosco/>
            </div>

            <Rodape/>

        </div>

    )
}