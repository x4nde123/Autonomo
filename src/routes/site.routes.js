import { Route, Routes } from "react-router-dom"
import ScrollTopo from "../scroll.js";
import Inicio from "../views/inicio";
import Contato from "../views/contato/inedex";
import Camisetas from '../views/camisetas';
import Moletons from '../views/moletons';
import Calcas from '../views/calcas';
import Diferenciais from "../views/diferenciais";
import Destaques from "../views/destaques";
import Depoimentos from "../views/depoimentos";
import Estilos from "../views/estilos";
import Teste from "../views/testeInicio";
import Blog from "../views/blog";
import SobreNos from "../views/sobreNos";
import PerguntasFrequentes from "../views/perguntasFrequentes";
import Suporte from '../views/suporte';
import TecnicasIniciantes from '../views/tecnicasIniciantes';
import Tendencias from '../views/tendencias2024';
import Sustentaveis from '../views/tecidosSustentaveis';
import Conservar from '../views/conservar';
import Tecnologia from '../views/tecnologias';
import Historias from '../views/historias';
import Devolucoes from '../views/devolucoes';
import PedidoErrado from '../views/pedidoErrado';
import NaoRecebi from "../views/naoRecebi/index.jsx";

import NotFound from "../views/notFound";


const SiteRoutes = () => (
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/contato" element={<Contato />} />
    <Route path="/camisetas" element={<Camisetas />} />
    <Route path="/moletons" element={<Moletons />} />
    <Route path="/calcas" element={<Calcas />} />
    <Route path="/diferenciais" element={<Diferenciais />} />
    <Route path="/destaques" element={<Destaques />} />
    <Route path="/depoimentos" element={<Depoimentos />} />
    <Route path="/estilos" element={<Estilos />} />
    <Route path="/teste" element={<Teste />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/sobreNos" element={<SobreNos />} />
    <Route path="/perguntasFrequentes" element={<PerguntasFrequentes />} />
    <Route path="/suporte" element={<Suporte />} />
    <Route path="/tecnicasIniciantes" element={<TecnicasIniciantes />} />
    <Route path="/tendencias2024" element={<Tendencias />} />
    <Route path="/tecidosSustentaveis" element={<Sustentaveis />} />
    <Route path="/conservar" element={<Conservar />} />
    <Route path="/tecnologia" element={<Tecnologia />} />
    <Route path="/historias" element={<Historias />} />
    <Route path="/devolucoes" element={<Devolucoes />} />
    <Route path="/pedidoErrado" element={<PedidoErrado />} />
    <Route path="/naoRecebi" element={<NaoRecebi />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default SiteRoutes