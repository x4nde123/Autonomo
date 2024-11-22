import { useState } from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const [selected, setSelected] = useState(1)

  const navigate = useNavigate()

  const paginas = [
    { id: 1, nome: 'Inicio', icon: '/icons/home.svg', path: '/home/lista' },
    { id: 2, nome: 'Vendas', icon: '/icons/money.svg', path: '/vendas/lista' },
    { id: 3, nome: 'Clientes', icon: '/icons/user.svg', path: '/clientes/lista' },
    { id: 4, nome: 'Categorias', icon: '/icons/delivery.svg', path: '/categorias/lista' },
    { id: 5, nome: 'Produtos', icon: '/icons/delivery.svg', path: '/produtos/lista' },
    { id: 6, nome: 'Usuários', icon: '/icons/user.svg', path: '/usuarios/lista'},
  ]

  return (
    <aside className="sidebar-container-main">
      <img src='/icons/logo.png' />

      <nav>
        {paginas.map(item => (
          <button
            onClick={() => {
              navigate(item.path)
              setSelected(item.id)  
            }}
            key={item.id}
          >
            <div className={`linha ${selected == item.id ? 'selected' : ''}`}></div>
            <img src={item.icon} />
            {item.nome}
          </button>
        ))}
      </nav>

    </aside>
  )
}

export default Sidebar