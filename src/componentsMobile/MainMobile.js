import { Dimensions, StyleSheet, View } from "react-native";
import AppBar from "./AppBar";
import CardComponent from "./CardContent";
import Header from "./Header";

const MainMobile = () => {
  return (
    <View style={styles.imageContainer}>
      <Header />
      <CardComponent />
      <AppBar />
    </View>
  );
};

export default MainMobile;

const styles = StyleSheet.create({
  imageContainer: {
    padding: 10,
    height: "100%",
  },
});
