const areaTableChartCtx = document
  .getElementById("areaTableChart")
  .getContext("2d");

const colorPrimary = "#8f44fd",
  colorBorder = "rgba(225, 225, 225, 0.08)";

let gradient = areaTableChartCtx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, "rgba(225, 225, 225, 0.2)");
gradient.addColorStop(0.8, "rgba(225, 225, 225, 0)");

const sales2022 = [12, 19, 10, 26, 15, 17, 10, 27, 0];

const sales2021 = [17, 10, 26, 15, 17, 10, 27, 12, 21];

const areaTableChart = new Chart(areaTableChartCtx, {
  type: "line",
  data: {
    labels: ["J", "..."],
    datasets: [
      {
        backgroundColor: gradient,
        borderColor: colorPrimary,
        label: "Numbers",
        fill: true,
        data: sales2022,
      },
    ],
  },
  options: {
    elements: {
      point: {
        radius: 8,
        hoverRadius: 8,
        borderWidth: 0,
      },
    },
  },
  scales: {
    x: { display: false, },
    y: {
      suggestedMax: 40,
      suggestedMin: 0,
      grid: {
        display: true,
        drawBorder: true,
        drawOnChartArea: true,
        drawTicks: true,
        color: colorBorder,
        borderColor: "transparent",
        borderDash: [5, 5],
        borderDashOffset: 2,
        tickColor: "transparent",
      },
    },
    tension: 0.3,
  },
});

const selectYear = (element, year) => {
  const buttons = document.querySelectorAll(".card-header button");

  buttons.forEach((button) => button.classList.remove("active"));

  element.classList.add("active");

  areaTableChart.data.datasets[0].data = year === 2022 ? sales2022 : sales2021

  areaTableChart.update()
};
