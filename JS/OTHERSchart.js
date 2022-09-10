let myOTHERSChart;
export const generateOTHERSChart = (NombreTabla, labels, datos) => {
  let ctx = document.getElementById("myOTHERSChart").getContext("2d");
  if (myOTHERSChart) {
    myOTHERSChart.destroy();
  }
  myOTHERSChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: NombreTabla,
          data: datos,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgba(100, 100, 100)",
            font: {
              size: 18,
            },
            usePointStyle: true,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 16,
            },
          },
        },
        y: {
          beginAtZero: false,
        },
      },
    },
  });
};
export const destroyChart = () => {
  const ctx = document.getElementById("myOTHERSChart").getContext("2d");
  myOTHERSChart.destroy();
};
