import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { updateTodoItem } from "../helpers/todo-service";
import { ON_TODO_ITEM_DONE } from "../helpers/constants";

const TodoItem = ({ id, title, done }) => {
  const {
    state: { selectedGpoupId },
    dispatch,
  } = useContext(AppContext);

  return (
    <View style={styles.itemContainer}>
      <Text
        style={{
          textDecorationLine: done ? "line-through" : "none",
          width: "85%",
          fontSize: 24,
          borderRightWidth: 1,
        }}
        numberOfLines={1}
        onPress={() =>
          updateTodoItem({ id, data: { selectedGpoupId, done: true } }).then(({ status }) =>
            status === 201
              ? dispatch({
                  type: ON_TODO_ITEM_DONE,
                  payload: { id, selectedGpoupId, done: true },
                })
              : console.log(status)
          )
        }
      >
        {title}
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
});
