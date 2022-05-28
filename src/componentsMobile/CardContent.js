import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { lineDataMonth, lineDataWeek, transactions } from "../data/data";
import LineChartComponent from "./LineChartComponent";

const CardComponent = () => {
  const [dataChart, setDataChart] = useState(lineDataMonth);
  const buttonMonth = () => {
    setDataChart(lineDataMonth);
  };
  const buttonWeek = () => {
    setDataChart(lineDataWeek);
  };
  return (
    <>
      <Card>
        <Card.Title
          title="Transactions history"
          subtitle="These are your monthly and daily actions. ️📊"
        />
        <Card.Content style={[styles.card]}>
          {transactions.map((e) => {
            return (
              <View style={styles.viewContent} key={Math.random()}>
                <Text style={styles.textTransactionsTitle}>Transactions</Text>
                <Text style={styles.textTransactionsNumber}>
                  {e.transactionNumber}
                </Text>
                <Text style={styles.textTransactionsSubTitle}>
                  {e.text.toUpperCase()}
                </Text>
              </View>
            );
          })}
        </Card.Content>
      </Card>
      <Card style={{ marginTop: 20, height: "60%" }}>
        <Card.Title title="Transactions Last Year" />

        <Card.Content>
          <View style={styles.viewButtons}>
            <Button onPress={buttonMonth} style={styles.buttons}>
              Monthly
            </Button>
            <Button onPress={buttonWeek} style={styles.buttons}>
              Daily
            </Button>
          </View>

          <LineChartComponent data={dataChart} />
        </Card.Content>
      </Card>
    </>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 10,
    margin: 5,
    paddin: 10,
    height: 100,
    shadowColor: "black",
    borderWidth: 1,
    borderColor: "#ddd",
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  viewButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttons: {
    flex: 1,
  },
  textTransactionsNumber: {
    fontSize: 30,
    fontWeight: "600",
    color: "#6979f8",
  },
  textTransactionsTitle: {
    fontWeight: "600",
  },
  textTransactionsSubTitle: {
    color: "#999999",
  },
});
