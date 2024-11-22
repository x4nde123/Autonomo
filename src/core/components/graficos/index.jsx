import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./index.scss";
import { priceFormatter } from "../../../utils/priceFormatter";

const Graficos = ({title}) => {
  const [chartOptions] = useState({
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["", "", "", "", "", ""],
    },
    yaxis: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#D9D9D9"],
  });

  const [chartData] = useState([
    {
      name: title,
      data: [30, 40, 45, 50, 49, 60],
    },
  ]);

  const total = chartData[0]?.data?.reduce((sum, value) => sum + value * 100, 0);

  return (
    <div className="graphic-container">
      <div>
        <h1>{title}</h1>
        <p>{priceFormatter(total)}</p>
      </div>
      <Chart
        options={chartOptions}
        series={chartData}
        type="bar"
        width='100%'
        height={200}
      />
    </div>
  );
};

export default Graficos;
