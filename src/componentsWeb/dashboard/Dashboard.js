import { Space, Typography } from "antd";
import { ExpensesSpace } from "../ExpensesSpace";
import "./DashboardStyles.css";
import { TransactionSpace } from "../TransactionSpace";
export const Dashboard = () => {
  return (
    <>
      <div className="divTitleDashb">
        <Typography.Text>Dashboard</Typography.Text>
      </div>
      <Space className="dashboardSpace">
        <TransactionSpace />
        <ExpensesSpace />
      </Space>
    </>
  );
};
