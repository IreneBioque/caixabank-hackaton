import { Card, Typography } from "antd";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./styles/ConversionCharts.css";

ChartJS.register(ArcElement, Tooltip, Legend);


export const ConversionChart = ({ dataPieChart }) => {
  const data = {
    labels: ["Phones", "Screens", "Pcs", "Other"],
    datasets: [
      {
        label: "# of Votes",
        data: [14, 21, 3, 12],
        backgroundColor: [
          "rgba(144, 19, 254, 1)",
          "rgba(0, 122, 255, 1)",
          "rgba(251, 136, 50, 1)",
          "rgba(230, 229, 230, 1)",
        ],
        borderColor: [
          "rgba(144, 19, 254, 1)",
          "rgba(0, 122, 255, 1)",
          "rgba(251, 136, 50, 1)",
          "rgba(230, 229, 230, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card className="CardConversion">
      <Typography.Title className="ConversionTitle">
        Conversión
      </Typography.Title>
      <Pie data={data} className="ChartPie" />
    </Card>
  );
};
