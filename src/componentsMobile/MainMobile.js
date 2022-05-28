import { StyleSheet, View } from "react-native";
import AppBar from "./AppBar";
import CardComponent from "./CardContent";

const MainMobile = () => (
  <View style={styles.imageContainer}>
    <AppBar />
    <CardComponent />
  </View>
);

export default MainMobile;

const styles = StyleSheet.create({
  body: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 30,
    backgroundColor: "white",
    paddingTop: 20,
  },
  imageContainer: {
    padding: 10,
  },
});
