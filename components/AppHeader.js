import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AppHeader = () => {
  return <Text style={styles.appHeader}>TodoList</Text>;
};

const styles = StyleSheet.create({
  appHeader: {
    fontSize: 34,
    paddingTop: "5%",
  },
});

export default AppHeader;
