import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const AddTodo = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <View style={{ width: "13%" }}>
        <Button color="#841584" title="Add" accessibilityLabel="Add To List" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 6,
  },
  input: {
    width: "84%",
    borderWidth: 1,
    fontSize: 24,
    padding: 2,
    paddingLeft: 10,
    borderRadius: 18,
    marginRight: 6,
  },
});

export default AddTodo;
