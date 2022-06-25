import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { updateTodoItem, deleteTodoItem } from "../helpers/todo-service";
import { ON_TODO_ITEM_DONE, ON_DELETE_TODO_ITEM } from "../helpers/constants";

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
          width: "88%",
          fontSize: 24,
          borderWidth: 1,
          borderRadius: 18,
          paddingLeft: 6,
        }}
        numberOfLines={1}
        onPress={() =>
          updateTodoItem({ id, data: { selectedGpoupId, done: true } }).then(({ status }) =>
            status === 201
              ? dispatch({
                  type: ON_TODO_ITEM_DONE,
                  payload: { id, selectedGpoupId },
                })
              : console.log(status)
          )
        }
      >
        {title}
      </Text>

      <Button
        title="del"
        onPress={() =>
          deleteTodoItem({ id, selectedGpoupId }).then(({ status }) => {
            status === 200
              ? dispatch({ type: ON_DELETE_TODO_ITEM, payload: { selectedGpoupId, id } })
              : console.log("error");
          })
        }
      />
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
