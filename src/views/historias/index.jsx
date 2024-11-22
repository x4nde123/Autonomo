import './index.scss';

import EstilosRoupas from '../../core/components/estilosRoupas';
import Rodape from '../../core/components/rodape';

export default function Historias(){

let historiasEstilos = [
    {
    fundoimagem: '/assets/images/img_historias.png',
    titulo: 'HISTÓRIAS INSPIRADORAS DE COSTUREIRAS AO REDOR DO MUNDO'
    }
]


    return (

        <div className="page-historias">

            <div className='container-inicio-historias'>
                {historiasEstilos.map(item =>
                    <EstilosRoupas
                        fundoimagem={item.fundoimagem}
                        titulo={item.titulo}
                    />
                )}
            </div>

            <div className="container-historias">

                <div className="descricoes-historias">

                    <div className='img-historias'>
                        <img src="/assets/images/img1-historias.png" alt="" />
                    </div>

                    <div className="descricoes">

                        <h1>Coco Chanel</h1>
                        <p>Coco Chanel, nascida Gabrielle Bonheur Chanel, foi uma estilista francesa que revolucionou a moda ao introduzir a "simplicidade luxuosa". Ela mudou a forma como as mulheres se vestiam, criando o icônico "vestidinho preto". Chanel se tornou uma das figuras mais influentes da moda no século 20, precursora das influenciadoras atuais.</p>

                    </div>

                </div>

                <div className="descricoes-historias">

                    <div className='img-historias'>
                        <img src="/assets/images/img2-historias.png" alt="" />
                    </div>

                    <div className="descricoes">
                        
                        <h1>Valentino Garavani</h1>
                        <p>Valentino, nascido na Itália, iniciou sua carreira em Paris e lançou sua marca em Roma, sendo conhecido como um "maestro" da moda. Ele vestiu ícones como Jacqueline Kennedy e é famoso pelo Valentino Red, uma tonalidade de vermelho que se tornou sua assinatura.</p>

                    </div>

                </div>

                <div className="descricoes-historias">

                    <div className='img-historias'>
                        <img src="/assets/images/img3-historias.png" alt="" />
                    </div>

                    <div className="descricoes">

                        <h1>Giorgio Armani</h1>
                        <p>Giorgio Armani, estilista italiano de sucesso, revolucionou o tailoring ao criar blazers femininos desconstruídos que combinavam poder e sensualidade. Ele se adaptou às mudanças da moda, lançando blazers com formas retas e ombros menos acentuados, que se tornaram essenciais no guarda-roupa feminino.</p>

                    </div>

                </div>

            </div>

            <div className="triangulo-historias">
                <img src="/assets/images/triangulo_iniciantes.png" alt="" />
            </div>

            <h1 className='h1-historias'>VEJA MAIS <br /> PUBLICAÇÕES NOSSAS</h1>

            <div className="container-historias-dois">
                <img src="/assets/images/trianguloB_iniciantes.png" alt="" />
            </div>

            <div className='rodape-historias'>
                <Rodape/>
            </div>

        </div>

    )
}