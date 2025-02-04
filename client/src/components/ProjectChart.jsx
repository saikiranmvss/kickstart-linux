import React, { useState } from "react";
import Chart from "react-apexcharts";

const chartOptions = {
    series: [85, 75, 50], 
    chart: {
      height: 200,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: "Total",
            formatter: function () {
              return "100%";
            },
          },
        },
        hollow: {
          size: "50%",
        },
      },
    },
    colors: ["#007bff", "#FFA500", "#FF6347"],
    labels: ["Project Views", "Likes", "Investors Connect"],
  }

  const ProjectChart = () => {

    return (
      <div>
        <Chart options={chartOptions} series={chartOptions.series} type="radialBar" height={250} />
      </div>
    );
  };
  
  export default ProjectChart;
  