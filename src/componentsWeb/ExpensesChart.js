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
import { Card } from "antd";
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

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data1 = [32, 43, 64, 55, 66, 77, 20, 12, 15, 9, 7, 90, 60, 50];
export const data = {
  labels,
  datasets: [
    {
      label: "Expenses",
      data: data1.map((e) => e),
      borderColor: "#2D14C4",
      fill: true,
      backgroundColor: "#2D14C4",
    },
  ],
};
export const ExpenseChart = () => {
  return (
    <Card className="ExpenseChartCard">
      <Line data={data}></Line>
    </Card>
  );
};
