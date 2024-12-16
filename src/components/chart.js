import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["Oziq-ovqat", "Ko'ngilochar", "Transport"],
    datasets: [
      {
        label: "Xarajatlar",
        data: [300, 500, 200],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy(); 
    }

    chartRef.current = new Chart(document.getElementById("myChart"), {
      type: "doughnut",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });

    return () => {
      if (chartRef.current) chartRef.current.destroy();
    };
  }, []);

  return (
    <div style={{ width: "300px", height: "300px", margin: "0 auto" }}>
      <canvas id="myChart" />
    </div>
  );
};

export default ChartComponent;
