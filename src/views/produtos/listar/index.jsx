
import useSWR from "swr"
import { api } from "../../../services/axios-setup"
import Table from "../../../core/components/table"
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getBaseUrl } from "../../../utils/getBaseUrl";
import { findById } from "../../../utils/find-by-id";
import { priceFormatter } from "../../../utils/priceFormatter";

const ListarProdutos = () => {

  const { data: produtosData, error: produtosError } = useSWR('/produtos', (key) =>
    api.get(key).then((res) => res.data)
  );
  const { data: categoriaData, error: categoriaError } = useSWR('/categoria', (key) =>
    api.get(key).then((res) => res.data)
  );


  const navigate = useNavigate()

  const produtosComImagem = useMemo(() => {
    return produtosData?.map(item => ({
      ...item,
      valor: priceFormatter(item.valor),
      categoria: findById(categoriaData, item.id_categoria)?.nome,
      image: item.image ? <img style={{ width: 50, height: 50, objectFit: 'contain' }} src={getBaseUrl(item.image)} /> : <img style={{ width: 50, height: 50, objectFit: 'contain' }} src="/icons/logo.png"  alt={item.nome || "Imagem do produto"} />
     
    }))
  }, [produtosData, categoriaData])

  const colunas = [
    { accessor: 'image', label: 'Imagem' },
    { accessor: 'nome', label: 'Nome do produto' },
    { accessor: 'valor', label: 'Preço' },
    { accessor: 'categoria', label: 'Nome da categoria' },
  ]

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
          onClick: () => navigate('/produtos/cadastro')
        }}
      />
    </div>
  )
}

export default ListarProdutos