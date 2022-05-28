import { Card } from "antd";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./styles/ExpensesChart.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const ExpenseChart = ({ dataExpensesChart }) => {
  const labels = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const data = {
    labels,
    datasets: [
      {
        label: "Expenses",
        data: dataExpensesChart.map((e) => e),
        borderColor: "#2D14C4",
        fill: true,
        backgroundColor: "#2D14C4",
      },
    ],
  };
  return (
    <Card className="ExpenseChartCard">
      <Line data={data}></Line>
    </Card>
  );
};
