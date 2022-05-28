import { ArrowUpOutlined } from "@ant-design/icons";
import { Card, Form, Input, Space, Typography } from "antd";
import { dataExpensesChart } from "../data/data";
import { ExpenseChart } from "./ExpensesChart";
import "./styles/ExpensesSpace.css";
export const ExpensesSpace = () => {
  return (
    <Card className="ExpensesCard">
      <Typography.Title className="titleExpenses">
        Weekly expenses
      </Typography.Title>
      <Form>
        <Form.Item>
          <Input type={"date"} />
        </Form.Item>
      </Form>
      <Space>
        <Typography.Text>
          <ExpenseChart dataExpensesChart={dataExpensesChart} />
        </Typography.Text>
      </Space>
      <Space className="bottomText">
        <Typography.Text className="TitleBottom">Total revenue</Typography.Text>
        <Typography.Text className="CountBottom">$76685.41</Typography.Text>
        <Typography.Text className="benefitsBottom">
          <ArrowUpOutlined />
          7,00%
        </Typography.Text>
      </Space>
    </Card>
  );
};
