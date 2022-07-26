import React, { useContext, useState } from "react";

import { StyleSheet, ScrollView } from "react-native";

import TodoItem from "./TodoItem";

import { updateTodoItem, deleteTodoItem } from "../helpers/todo-service";
import { ON_TODO_ITEM_DONE, ON_DELETE_TODO_ITEM } from "../helpers/constants";

const TodoList = () => {
  const {
    state: { selectedGpoupId, listGroups },
    dispatch,
  } = useContext(AppContext);

  const [updatingID, setUpdatingID] = useState("");

  const onHandleDone = (_id) => {
    setUpdatingID(_id);
    updateTodoItem({ _id, data: { selectedGpoupId, done: true } })
      .then(({ status }) =>
        status === 201
          ? dispatch({
              type: ON_TODO_ITEM_DONE,
              payload: { _id, selectedGpoupId },
            })
          : console.log("error")
      )
      .then(() => setUpdatingID(""));
  };

  const onHandleDelete = (_id) => {
    setUpdatingID(_id);
    deleteTodoItem({ _id, selectedGpoupId })
      .then(({ status }) => {
        status === 204
          ? dispatch({ type: ON_DELETE_TODO_ITEM, payload: { selectedGpoupId, _id } })
          : console.log("error");
      })
      .then(() => setUpdatingID(""));
  };

  return (
    <ScrollView style={styles.todoList}>
      {listGroups.map((el) =>
        el._id === selectedGpoupId
          ? el.todos.map((el) => (
              <TodoItem
                _id={el._id}
                title={el._id === updatingID ? "Updating..." : el.title}
                key={el._id}
                done={el._id === updatingID ? false : el.done}
                onHandleDone={onHandleDone}
                onHandleDelete={onHandleDelete}
              />
            ))
          : null
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  todoList: {
    fontSize: 24,
  },
});

export default TodoList;
