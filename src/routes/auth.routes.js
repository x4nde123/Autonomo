import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "../core/components/header";
import ListarUsuarios from "../views/usuarios/listar";
import CadastrarUsuario from "../views/usuarios/cadastro";
import Sidebar from "../core/components/sidebar";
import ListarCategorias from "../views/categorias/listar";
import CadastroCategorias from "../views/categorias/cadastro";
import ListarProdutos from "../views/produtos/listar";
import CadastroProdutos from "../views/produtos/cadastro";
import SiteRoutes from "./site.routes";
import ScrollTopo from "../scroll.js";
import Inicio from "../views/inicio";
import Contato from "../views/contato/inedex";
import Camisetas from "../views/camisetas";
import Moletons from "../views/moletons";
import Calcas from "../views/calcas";
import Diferenciais from "../views/diferenciais";
import Destaques from "../views/destaques";
import Depoimentos from "../views/depoimentos";
import Estilos from "../views/estilos";
import Teste from "../views/testeInicio";
import Blog from "../views/blog";
import SobreNos from "../views/sobreNos";
import PerguntasFrequentes from "../views/perguntasFrequentes";
import Suporte from "../views/suporte";
import TecnicasIniciantes from "../views/tecnicasIniciantes";
import Tendencias from "../views/tendencias2024";
import Sustentaveis from "../views/tecidosSustentaveis";
import Conservar from "../views/conservar";
import Tecnologia from "../views/tecnologias";
import Historias from "../views/historias";
import Devolucoes from "../views/devolucoes";
import PedidoErrado from "../views/pedidoErrado";
import NaoRecebi from "../views/naoRecebi/index.jsx";
import NotFound from "../views/notFound";
import ListarClientes from "../views/clientes/listar/index.jsx";
import CadastroClientes from "../views/clientes/cadastro/index.jsx";
import ListarVendas from "../views/vendas/lista/index.jsx";
import CadastroVendas from "../views/vendas/cadastro/index.jsx";
import DashboardListar from "../views/dashboard/lista/index.jsx";
import LoginView from "../views/login/index.jsx";

const AuthRoutes = () => {
  const location = useLocation();
  const isAuthRoute = /\/(lista|cadastro)$/.test(location.pathname);

  return (
    <main>
      {isAuthRoute && <Header />}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {isAuthRoute && (
          <div style={{ width: "15%" }}>
            <Sidebar />
          </div>
        )}
        <div className={isAuthRoute ? 'container-listar' : 'unlogged'}>
          <Routes>
            <Route path="/login" element={<LoginView />} />
            <Route path="/usuarios/lista" element={<ListarUsuarios />} />
            <Route path="/usuarios/cadastro" element={<CadastrarUsuario />} />
            <Route path="/categorias/lista" element={<ListarCategorias />} />
            <Route path="/categorias/cadastro" element={<CadastroCategorias />} />
            <Route path="/produtos/lista" element={<ListarProdutos />} />
            <Route path="/produtos/cadastro" element={<CadastroProdutos />} />
            <Route path="/clientes/lista" element={<ListarClientes />} />
            <Route path="/clientes/cadastro" element={<CadastroClientes />} />
            <Route path="/vendas/lista" element={<ListarVendas />} />
            <Route path="/vendas/cadastro" element={<CadastroVendas />} />
            <Route path="/home/lista" element={<DashboardListar />} />
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
        </div>
      </div>
    </main>
  );
};

export default AuthRoutes;
