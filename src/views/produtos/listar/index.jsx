
import useSWR from "swr"
import { api } from "../../../services/axios-setup"
import Table from "../../../core/components/table"
import { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { getBaseUrl } from "../../../utils/getBaseUrl"
import { findById } from "../../../utils/find-by-id"
import { priceFormatter } from "../../../utils/priceFormatter"

const ListarProdutos = () => {
  const { data } = useSWR('/produtos', (key) => api.get(key).then(res => res.data))
  const { data: categoriaData } = useSWR('/categoria', (key) => api.get(key).then(res => res.data))

  const navigate = useNavigate()

  const produtosComImagem = useMemo(() => {
    return (data ?? [])?.map(item => ({
      ...item,
      valor: priceFormatter(item.valor),
      categoria: findById(categoriaData, item.id_categoria)?.nome,
      image: item.image ? <img style={{ width: 50, height: 50, objectFit: 'contain' }} src={getBaseUrl(item.image)} /> : <img style={{ width: 50, height: 50, objectFit: 'contain' }} src="/icons/logo.png" />
    }))
  }, [data, categoriaData])

  const colunas = [
    { accessor: 'image', label: 'Imagem' },
    { accessor: 'nome', label: 'Nome do produto' },
    { accessor: 'valor', label: 'Preço' },
    { accessor: 'categoria', label: 'Nome da categoria' },
  ]

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