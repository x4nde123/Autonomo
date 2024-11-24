import useSWR from "swr";
import { api } from "../../../services/axios-setup";
import Table from "../../../core/components/table";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getBaseUrl } from "../../../utils/getBaseUrl";
import { findById } from "../../../utils/find-by-id";
import { priceFormatter } from "../../../utils/priceFormatter";

const ListarProdutos = () => {
  // SWR para buscar os dados de produtos e categorias
  const { data: produtosData, error: produtosError } = useSWR('/produtos', (key) =>
    api.get(key).then((res) => res.data)
  );
  const { data: categoriaData, error: categoriaError } = useSWR('/categoria', (key) =>
    api.get(key).then((res) => res.data)
  );

  const navigate = useNavigate();

  // Garantir que `produtosData` seja sempre um array para evitar erros
  const produtosComImagem = useMemo(() => {
    if (!Array.isArray(produtosData) || !Array.isArray(categoriaData)) return []; // Fallback seguro

    return produtosData.map((item) => ({
      ...item,
      valor: priceFormatter(item.valor || 0), // Formata valores, mesmo que estejam indefinidos
      categoria: findById(categoriaData, item.id_categoria)?.nome || "Categoria não encontrada",
      image: item.image ? (
        <img
          style={{ width: 50, height: 50, objectFit: "contain" }}
          src={getBaseUrl(item.image)}
          alt={item.nome || "Imagem do produto"}
        />
      ) : (
        "Sem imagem"
      ),
    }));
  }, [produtosData, categoriaData]);

  // Definição das colunas da tabela
  const colunas = [
    { accessor: "image", label: "Imagem" },
    { accessor: "nome", label: "Nome do produto" },
    { accessor: "valor", label: "Preço" },
    { accessor: "categoria", label: "Nome da categoria" },
  ];

  // Renderização condicional durante carregamento ou erros
  if (produtosError || categoriaError) {
    return <p>Erro ao carregar os dados. Verifique a conexão e tente novamente.</p>;
  }

  if (!produtosData || !categoriaData) {
    return <p>Carregando produtos e categorias...</p>;
  }

  return (
    <div>
      <Table
        data={produtosComImagem}
        columns={colunas}
        options={{
          onClick: () => navigate("/produtos/cadastro"),
        }}
      />
    </div>
  );
};

export default ListarProdutos;
