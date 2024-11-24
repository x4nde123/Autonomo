
import useSWR from "swr"
import Form from "../../../core/components/form"
import { api } from "../../../services/axios-setup"
import { useMemo } from "react"
import { formDataRequest } from "../../../services/form-data"
import { toast } from "react-toastify"

const initialData = {
  nome: '',
  id_categoria: 1,
  valor: '',
  descricao: '',
  image: ''
}

const CadastroProdutos = () => {
  const { data } = useSWR('/categoria', (key) => api.get(key).then(res => res.data))

  const categoriasItems = useMemo(() => {
    if (!data || !Array.isArray(data)) return [];

   
    
  return data.map(item => ({ id: item.id, name: item.nome }));
  }, [data]);

 

  const campos = [
    { name: 'nome', label: 'Nome' },
    { name: 'id_categoria', label: 'Categoria', type: 'select', items: categoriasItems },
    { name: 'valor', label: 'Preço', mask: 'R$999,99', onlyNumbers: true },
    { name: 'descricao', label: 'Descrição' },
    { name: 'image', label: 'Logo', type: 'file' },
  ]

  const cadastrar = async (data) => {
    // Remove a máscara do valor
    data.valor = parseFloat(data.valor.replace('R$', '').replace(',', '.').trim());
  
    console.log(data);
  
    const response = await api.post('/produtos', data);
  
    if (data.image instanceof File) {
      await formDataRequest(`/produtos/${response.data.id}/image`, 'image', data.image);
    } else {
      console.warn("Imagem não encontrada ou formato inválido.");
    }

    
    if (!data) {
      return <p>Carregando categorias...</p>;
    }
    
  
    toast.success('Produto cadastrado com sucesso!');
  };

  return (
    <>
      <Form
        initialData={initialData}
        fields={campos}
        onSubmit={cadastrar}

        
      />
    </>
  )
}


export default CadastroProdutos