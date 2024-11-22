
import React from "react"
import { createColumnHelper } from "@tanstack/react-table"
import Table from "../../../core/components/table"
import { useNavigate } from "react-router-dom"
import { api } from "../../../services/axios-setup"
import useSWR from "swr"
import Title from "../../../core/components/title"

const ListarUsuarios = () => {

  const { data } = useSWR('/usuarios',(key) => api.get(key).then(res => res.data))

  const navigate = useNavigate()

  const colunas = [
    { accessor: 'nome', label: 'Nome' },
    { accessor: 'email', label: 'Email' }
  ]

  return (
    <div>
      <Title
        title='Usuários'
        subtitle='Controle e organize os dados dos seus clientes. Atualize informações, adicione novos contatos e remova registros desatualizados. Facilite o atendimento e a gestão das suas relações comerciais.'
      />
      <Table
        options={{
          onClick: () => navigate('/usuarios/cadastro')
        }}
        data={data}
        columns={colunas}
      />
    </div>
  )
}


export default ListarUsuarios