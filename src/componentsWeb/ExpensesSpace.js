import { Card, DatePicker, Form, Space, Typography } from "antd";
import { ExpenseChart } from "./ExpensesChart";
import "./styles/ExpensesSpace.css";

export const ExpensesSpace = () => {
  return (
    <Card>
      <Typography.Text>Weekly expenses</Typography.Text>
      <Form>
        <Form.Item>
          <DatePicker />
        </Form.Item>
      </Form>
      <Space>
        <Typography.Text>
          <ExpenseChart />
        </Typography.Text>
      </Space>
      <Space>
        <Typography.Text>Total revenue</Typography.Text>
        <Typography.Text>$76685.41</Typography.Text>
      </Space>
    </Card>
  );
};
