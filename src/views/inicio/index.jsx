import './index.scss';

import { Link } from 'react-router-dom';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import aos from 'aos';

import Cabecalho from '../../core/components/cabecalho';
import Infos from '../../core/components/infos';
import Rodape from '../../core/components/rodape';
import CompInicio from '../../core/components/compInicio';
import React, { Suspense, lazy } from 'react';

register();
aos.init();

export default function Inicio(){

  const loaudComponente = lazy( () => import('../../core/components/infos'));

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

let servisos = [
{
  id: 1,
  imagem: '/assets/images/img1_serviso.jpeg',
  titulo: 'NOSSOS DIFRENCIAIS',
  descricao: 'Explore como combinamos qualidade superior, atendimento personalizado e técnicas inovadoras para oferecer resultados excepcionais. Com uma abordagem única e dedicação a cada detalhe.',
  link: '/diferenciais',
  caminho: 'Ver mais'
}
]

let servisos2 = [
{
  id: 2,
  imagem: '/assets/images/img2_serviso.jpeg',
  titulo: 'DESTAQUES DA SEMANA',
  descricao: 'Confira nossos serviços e criações em destaque desta semana. Explore novidades, ofertas especiais e as últimas tendências que você não pode perder.',
  link: '/destaques',
  caminho: 'Ver mais'
}
]

let servisos3 = [
  { id: 1,
    imagem: '/assets/images/img3_serviso.jpeg',
    titulo: 'GALERIA DE ESTILOS',
    descricao: 'Veja nossa variedade de designs e estilos exclusivos. Encontre inspiração e descubra a peça perfeita para você.',
    link: '/estilos',
    caminho: 'Ver mais'
  }
]

let inicio = [
  {
      fundoImagem: '/assets/images/fundo_inicio.png',
      tituloDescricao: 'MODAS DE VERÃOS',
      descricao: 'Descubra as tendências mais frescas e leves para a estação. Nossa seleção de moda de verão traz estilo e conforto, ideal para aproveitar ao máximo os dias quentes com peças que combinam elegância e praticidade.',
      FundoVerMais: 'verde',
      corVerMais: '',
      primeiraImagem: '/assets/images/img1_inicio.png ',
      segundaImagem: '/assets/images/img2_inicio.png'
  }
]

let obj = [
  { id: 1, imagem: '/assets/images/img1_inicio.png'},
  { id: 2, imagem: '/assets/images/img2_inicio.png'},
  { id: 3, imagem: '/assets/images/img3_inicio.png'}
]

  return (

    <div className='page-inicio'>

      <div className="fundo-inicio">
        <img src="/assets/images/fundo_inicio.png" alt="" />
      </div>

      <div className='container-inicio' id="image1">

        <div data-aos="fade-left" className='cabecalho-inicio'>
          <Cabecalho colorbutton='marrom'/>
        </div>
        
        <div className='descricacao-inicio'> 

          <div data-aos="fade-left" className='descricao'>
            
            <h1>MODA DE VERÃOS</h1>

            <h3>Descubra as tendências mais frescas e leves para a estação. Nossa seleção de moda de verão traz estilo e conforto, ideal para aproveitar ao máximo os dias quentes com peças que combinam elegância e praticidade.</h3>

            <div>

              <button className='ver-mais'>Ver Mais</button> 

            </div>

          </div>

          <div className='imgs-inicio'>

            

          </div>

        </div>

        <div className='borrao-inicio'>

          <img src="/assets/images/borrao_inicio.png" alt="" />

        </div>

      </div>

      <div className='container-categorias'>

        <div className='categorias'>

          <h1 className='h1-categorias'>CATEGORIAS</h1>
          <img className='borrao-categorias' src="/assets/images/borrao-categorias.png" alt="" />

        </div>


          <p className='descricao-categorias'>Oferecemos serviços de ajuste e confecção sob medida, transformando suas <br /> ideias em peças únicas com um acabamento perfeito</p>


        <div className='tipos-roupas'>

          <div 
          data-aos="zoom-in" 
          className='ellipses'>

            <div className='tipos'>
              <img className='ellipse1' src="/assets/images/Ellipse1.png"/>
              <Link onClick={handleScrollToTop} to='/camisetas#camisetas'>
                <h2 className='tipo1'>Camisetas</h2>
              </Link>      
            </div>

            <div className='tipos'>
              <img className='ellipse2' src="/assets/images/Ellipse2.png"/>
              <Link onClick={handleScrollToTop} to='/moletons'>
              <h2 className='tipo2'>Moletons</h2>
              </Link>
            </div>
          
            <div className='tipos'>
              <img className='ellipse3' src="/assets/images/Ellipse3.png"/>
              <Link onClick={handleScrollToTop} to='/calcas'>
              <h2 className='tipo3'>Calças</h2>
            </Link>          
            </div>

          </div>

        </div>

      </div>

      <div className='container-servisos' id="serviso">

        <h1 className='h1-servisos'>NOSSOS SERVIÇOS E CRIAÇÕES</h1>

        <h3> Acesse o que há de melhor em nossos serviços e estilos.</h3> 

        <div className='comp1'>

          {servisos.map(info =>
            <Infos key={info.id}
              imagem = {info.imagem}
              titulo = {info.titulo}
              descricao = {info.descricao}
              link = {info.link}
              caminho = {info.caminho}
            />
          )}

        </div>

        <div className='comp2'>

          {servisos2.map(info =>
            <Infos key={info.id}
              imagem = {info.imagem}
              titulo = {info.titulo}
              descricao = {info.descricao}
              link = {info.link}
              caminho = {info.caminho}
            />
          )}

        </div>

        <div className='comp3'>

          {servisos3.map(info =>
            <Infos key={info.id}
              imagem = {info.imagem}
              titulo = {info.titulo}
              descricao = {info.descricao}
              link = {info.link}
              caminho = {info.caminho}
            />
          )}

        </div>

      </div>

      <button className='ver-mais-depoimentos'>
        <Link to='' className='link-depoimentos'>Ver mais</Link>
      </button>

      <div className='container-contato'>

        <h1>FALE CONOSCO </h1>

        <h2>JUNTOS, COSTURANDO SONHOS</h2>

        <div className='fale-conosco-contato'>

          <div className='container-instagram'>

            <img src="/assets/images/logo_instagram.png" alt="" />

            <h3><b>Portfólio Visual:</b> Veja nosso trabalho através de fotos e vídeos inspiradores.</h3>

            <h3><b>Novidades em Tempo Real:</b> Receba atualizações sobre novos produtos e serviços.</h3>

            <h3><b>Promoções Exclusivas:</b> Acesse ofertas especiais para nossos seguidores</h3>            

          </div>

          <div className='divisao'>

            <div className='bolinha'></div>
            <div className='reta'></div>
            <div className='bolinha'></div>

          </div>

          <div className="container-whats">

            <img src="/assets/images/logo_whatsapp.png" alt="" />

            <h3><b>Suporte Rápido:</b> Resolva problemas e tire dúvidas em tempo real.</h3>

            <h3><b>Confirmação de Pedidos:</b> Confirme detalhes dos serviços diretamente.</h3>

            <h3><b>Atendimento Imediato:</b> Respostas rápidas para suas dúvidas e solicitações.</h3>

          </div>

        </div>

      </div>

      <div className='container-parcerias'>

        <h1>EMPRESAS PARCEIRAS</h1>
        <h3>Conheça nossas empresas parceiras, com quem colaboramos para oferecer o melhor <br /> em materiais e serviços de costura. Juntas, garantimos qualidade e inovação em cada <br /> projeto.</h3>

        <div className='imgs-parcerias'>

          <div className='img-parceria1'>
            <img src="/assets/images/logo_parceria_pfaff.png" alt="" />
          </div>

          <div className='img-parceria2'>
            <img src="/assets/images/logo_parceria_lta.png" alt="" />
          </div>

          <div className='img-parceria3'>
            <img src="/assets/images/logo_parceria_single.png" alt="" />
          </div>

        </div>

      </div>

      <div className='container-depoimentos'>

        <h1 className='h1-depoimento'>DEPOIMENTOS</h1>

        <div className='depoimento-um-inicio'>

          <div className='depoimento um'>
            <h1>Ana Clara Costa</h1>
            <h2>Essa linha me fez economizar tempo e esforço</h2>
          </div>

          <div className='depoimento dois'>
            <h1>Gabriela Lima</h1>
            <h2>Minha avó costumava usar, e agora eu entendo por quê</h2>
          </div>

        </div>

        <div className='depoimento-dois-inicio'>

          <div className='depoimento tres'>
            <h1>Antônio Pereira</h1>
            <h2>Comprei uma variedade de tons e estou encantado com a consistência em todos eles</h2>
          </div>
          
          <div className='depoimento quatro'>
            <h1>Sofia Mendes</h1>
            <h2>A durabilidade dessa linha é excepcional, não troco por nada</h2>
          </div>

        </div>

      </div>

      <button className='ver-mais-depoimentos'>
        <Link to='/depoimentos' className='link-depoimentos'>Ver mais</Link>
      </button>

      <div className='rodape-inicio'>
        <Rodape/>
      </div>

    </div>
  )
}