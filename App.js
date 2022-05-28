import { StyleSheet, View } from "react-native";
import MainMobile from "./src/componentsMobile/MainMobile";
import { Platform } from "react-native";
import MainWeb from "./src/componentsWeb/MainWeb";

export default function App() {
  if (Platform.OS !== "web") {
      return (
        <View style={{ flex: 1 }}>
          <MainMobile />
        </View>
      );
  } else {
    return (
      <MainWeb />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
