import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const AppBar = () => (
  <Appbar style={styles.bottom}>
    <Appbar.Action
      icon="chart-bar"
      onPress={() => console.log("Pressed label")}
    />
    <Appbar.Action
      icon="compass"
      onPress={() => console.log("Pressed delete")}
    />
    <Appbar.Action icon="account" onPress={() => console.log("Pressed mail")} />
  </Appbar>
);

export default AppBar;

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 30,
    display: "flex",
    justifyContent: "space-evenly"
  },
});
