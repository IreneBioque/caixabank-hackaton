import { Space, Typography } from "antd";
import { ExpensesSpace } from "../ExpensesSpace";
import "./DashboardStyles.css";
import { TransactionSpace } from "../TransactionSpace";
export const Dashboard = () => {
  return (
    <>
      <Typography.Title>Dashboard</Typography.Title>
      <Space className="dashboardSpace">
        <TransactionSpace />
        <ExpensesSpace />
      </Space>
    </>
  );
};
