import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions, StyleSheet, Text, View } from "react-native";
const LineChartComponent = ({ data }) => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={{overflow: "scroll"}}>
      <LineChart
        data={data}
        width={windowWidth}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "rgba(255, 255, 255, 1)",
          backgroundGradientTo: "rgba(255, 255, 255, 1)",
          color: (opacity = 1) => `rgba(105, 121, 248, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          overflow: "scroll",
        }}
      />
    </View>
  );
};

export default LineChartComponent;
