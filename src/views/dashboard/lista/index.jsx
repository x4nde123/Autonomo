import useSWR from "swr";
import Graficos from "../../../core/components/graficos";
import "./index.scss";
import { api } from "../../../services/axios-setup";
import { useMemo } from "react";
import dayjs from "dayjs";

const DashboardListar = () => {
  const { data: vendas } = useSWR("/vendasConsultar", api.get);
  const { data: clientes } = useSWR("/clientesConsultar", api.get);

  const orderedData = useMemo(() => {
    if (!vendas?.data || !clientes?.data) return [];
    
    return vendas?.data?.sort((a, b) => new Date(b.dia_da_venda) - new Date(a.dia_da_venda))
      .slice(0, 5)
  }, [vendas?.data, clientes?.data]);

  const clientesMap = useMemo(() => {
    if (!clientes?.data) return {};
    
    return clientes?.data?.reduce((acc, cliente) => {
      acc[cliente.id] = cliente.nome;
      return acc;
    }, {})
  }, [clientes]);

  return (
    <div>
      <div className="heading-section">
        <h1>Acompanhe seu site mais de perto</h1>
        <p>
          Monitore suas finanças com facilidade. Acompanhe despesas, receita e
          vendas em tempo real. Tenha uma visão clara do desempenho do seu site
          e tome decisões estratégicas para otimizar seus resultados!
        </p>
      </div>
      <div className="graphic-section">
        <Graficos title="Receitas" />
        <Graficos title="Despesas" />
        <Graficos title="Vendas" />
      </div>
      <div className="heading-section">
        <h1>Vendas Recentes</h1>
        <p>
          Acompanhe as transações mais recentes em tempo real. Veja detalhes
          como data, valor e produto vendido, e filtre por status. Identifique
          tendências e melhore seu atendimento com informações dos clientes.
        </p>
      </div>
      <div className="vendas-recentes">
        {orderedData?.map((item) => (
          <div key={item.id} className="venda">
            <div className="client-info">
              <div className="user-icon"></div>
              <p>{clientesMap[item.id_cliente]}</p>
            </div>
            <p>Realizada</p>
            <p>{dayjs(item.dia_da_venda).format("HH:mm")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardListar;
