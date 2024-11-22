import useSWR from "swr"
import { api } from "../../../services/axios-setup"
import Form from "../../../core/components/form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useMemo } from "react"
import dayjs from "dayjs"

const CadastroVendas = () => {
    const { data: produtos } = useSWR('/produtos', api.get)
    const { data: clientes } = useSWR('/clientesConsultar', api.get)

    const produtosSelect = useMemo(() => {
        return produtos?.data?.map(item => ({id: item.id, name: item.nome})) ?? []
    },[produtos])

    const clientesSelect = useMemo(() => {
        return clientes?.data?.map(item => ({id: item.id, name: item.nome})) ?? []
    },[clientes])

    const navigate = useNavigate()
    
    const initialData = {
        produtos: null,
        id_clientes: null,
        quantidade: 0,
        valor: 0,
        numero: ''
    }

    const fields = [
        { name: 'produtos', label: 'Produtos', type: 'select', items: produtosSelect },
        { name: 'id_clientes', label: 'Cliente', type: 'select', items: clientesSelect },
        { name: 'quantidade', label: 'Quantidade' },
        { name: 'valor', label: 'Preço', mask: 'R$999,99' },
        { name: 'numero', label: 'Número do pedido' }
    ]


    const cadastrar = async (data) => {
        console.log(data)
        
        await api.post('/vendasInserir', {
            ...data,
            valor: (data.valor.replace('R$', '')).replace(',', '.')
        })

        toast.success('Venda cadastrada com sucesso!')
    }

    return (
        <div>
            <Form
                options={{
                    onClick: () => navigate('/vendas/cadastro')
                }}
                fields={fields}
                onSubmit={cadastrar}
                initialData={initialData}
            />
        </div>
    )
}

export default CadastroVendas