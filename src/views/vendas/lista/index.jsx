import useSWR from "swr"
import { api } from "../../../services/axios-setup"
import Table from "../../../core/components/table"
import { useNavigate } from "react-router-dom"
import { findById } from "../../../utils/find-by-id"
import { priceFormatter } from "../../../utils/priceFormatter"



const ListarVendas = () => {
    const { data } = useSWR('/vendasConsultar', api.get)
    const {data: produtos} = useSWR('/produtos', api.get)

    const navigate = useNavigate()

    const columns = [
        { accessor: 'produtos', label: 'Produtos' },
        { accessor: 'valor', label: 'Valor' },
        { accessor: 'quantidade', label: 'Qtd' },
    ]

    const formatedData = data?.data?.map(item => ({
        ...item,
        produtos: findById(produtos?.data, item?.produtos)?.nome,
        valor: priceFormatter(item.valor)
    }))

    return (
        <div>
            <Table
                options={{
                    onClick: () => navigate('/vendas/cadastro')
                }}
                data={formatedData ?? []}
                columns={columns}
            />
        </div>
    )
}

export default ListarVendas