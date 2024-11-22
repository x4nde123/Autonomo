import { data } from "framer-motion/client"
import Form from "../../../core/components/form"
import { api } from "../../../services/axios-setup"
import { toast } from "react-toastify"

const CadastroClientes = () => {

    const campos = [
        {name: 'nome', label: 'Nome'},
        {name: 'email', label: 'E-mail'},
        {name: 'numero', label: 'Telefone', mask: '(99) 99999-9999'}
    ]

    const initialData = {
        nome: '',
        email: '',
        numero: ''
    }

    const cadastrar = async (data) =>{
        await api.post('/clientesInserir', data)

        toast.success('Cliente Cadastrado com sucesso')
    }

    return (
        <div>
            <Form
                fields={campos}
                initialData={initialData}
                onSubmit={cadastrar}
            />
        </div>
    )
}

export default CadastroClientes