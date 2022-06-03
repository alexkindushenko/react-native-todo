import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const TodoItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.todoItem} numberOfLines={1}>
        TodoItem
      </Text>
      <Button title="More" />
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 6,
  },
  todoItem: {
    width: "85%",
    fontSize: 24,
    // borderRightColor: "black",
    // borderWidth: 1,
    borderRightWidth: 1,
  },
});
