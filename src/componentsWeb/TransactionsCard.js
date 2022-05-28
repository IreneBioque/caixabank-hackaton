import { Card, Typography } from "antd";
import { transactions } from "../data/data";
import "./styles/TransactionCard.css";
export const TransactionCard = () => {
  return transactions.map((e) => {
    return (
      <Card className="transactionCard">
        <Typography.Text >Transactions</Typography.Text>
        <Typography.Text className="NumberText">{e.transactionNumber}</Typography.Text>
        <Typography.Text>{e.text}</Typography.Text>
      </Card>
    );
  });
};
