import { Space } from "antd";
import { ConversionChart } from "./ConversionChart";
import { TransactionCard } from "./TransactionsCard";
import "./styles/TransactionSpace.css";

export const TransactionSpace = () => {
  return (
    <Space>
      <div className="TransactionCardSpace">
        <TransactionCard />
      </div>
      <ConversionChart />
    </Space>
  );
};
