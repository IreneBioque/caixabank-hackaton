import { ConversionChart } from "./ConversionChart";
import "./styles/TransactionSpace.css";
import { TransactionCard } from "./TransactionsCard";
import { dataPieChart } from "../data/data";
export const TransactionSpace = () => {
  return (
    <div className="SpaceTransaction">
      <div className="TransactionCardSpace">
        <TransactionCard />
      </div>
      <ConversionChart  />
    </div>
  );
};
