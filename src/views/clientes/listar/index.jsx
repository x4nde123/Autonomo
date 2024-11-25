import useSWR from "swr"
import { api } from "../../../services/axios-setup"
import Table from "../../../core/components/table"
import { useNavigate } from "react-router-dom"
import { useMemo } from "react"
import dayjs from "dayjs"

const ListarClientes = () => {
    const {data} = useSWR('/clientesConsultar', api.get)

    const navigate = useNavigate()

    const resultadosComData = useMemo(() => {   
        return data?.data.map(item => ({
            ...item,
            UltimaCompra: item.UltimaCompra ? dayjs(item.UltimaCompra).format('DD/MM/YYYY') : ''
        }))
    },[data])

    const colunas = [
        {accessor: 'nome', label: 'Nome'},
        {accessor: 'numero', label: 'Telefone'},
        {accessor: 'email', label: 'E-mail'},
       
    ]

    return (
        <div>
            <Table
                data={resultadosComData ?? []}
                columns={colunas}
                options={{
                    onClick: () => navigate('/clientes/cadastro')
                }}
            />
        </div>
    )
}

export default ListarClientes