import { Image, StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";

const AppBar = () => (
  <Appbar style={styles.body}>
    <View style={styles.imageContainer}>
      {Platform.OS === "web" ? (
        <img src="../../assets/logo.png" />
      ) : (
        <Image source={require("../../assets/logo.png")} />
      )}
    </View>
  </Appbar>
);

export default AppBar;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    paddingTop: 20,
  },
  imageContainer: {
    padding: 10,
  },
});
