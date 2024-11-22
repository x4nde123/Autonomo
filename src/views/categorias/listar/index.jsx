import useSWR from "swr"
import { api } from "../../../services/axios-setup"
import { useMemo } from "react"
import Table from "../../../core/components/table"
import { useNavigate } from "react-router-dom"

const ListarCategorias = () => {
  const { data } = useSWR('categoria', (key) => api.get(key).then(res => res.data))

  const navigate = useNavigate()

  const categorias = useMemo(() => {
    return data?.map(item => ({
      ...item,
      descricao: `${item.descricao.slice(0, 25)}...`
    })) ?? []
  }, [data])

  console.log(categorias)

  const colunas = [
    { accessor: 'nome', label: 'NOME' },
    { accessor: 'descricao', label: 'Descrição' }
  ]

  return (
    <div>
      <Table
        data={categorias}
        columns={colunas}
        options={{
          onClick: () => navigate('/categorias/cadastro')
        }}
      />
    </div>
  )
}

export default ListarCategorias