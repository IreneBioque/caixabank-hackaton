import { Image, StyleSheet, View } from "react-native";

const Header = () => (
  <View style={styles.body}>
    {Platform.OS === "web" ? (
      <img src="../../assets/logo.png" />
    ) : (
      <Image source={require("../../assets/logo.png")} />
    )}
  </View>
);

export default Header;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    paddingTop: 40,
  },
});
