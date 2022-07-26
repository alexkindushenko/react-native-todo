import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TodoItem = ({ _id, title, done, onHandleDone, onHandleDelete }) => {
  return (
    <View style={styles.itemContainer}>
      <Text
        style={{
          textDecorationLine: done ? "line-through" : "none",
          width: "88%",
          fontSize: 30,
          borderWidth: 1,
          borderRadius: 20,
          paddingLeft: 6,
        }}
        numberOfLines={1}
        onPress={() => onHandleDone(_id)}
      >
        {title}
      </Text>

      <TouchableOpacity onPress={() => onHandleDelete(_id)}>
        <Text style={{ fontSize: 18, padding: "2%" }}>DEL</Text>
      </TouchableOpacity>
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
});
