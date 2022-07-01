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

  const onHandleDone = (id) => {
    setUpdatingID(id);
    updateTodoItem({ id, data: { selectedGpoupId, done: true } })
      .then(({ status }) =>
        status === 201
          ? dispatch({
              type: ON_TODO_ITEM_DONE,
              payload: { id, selectedGpoupId },
            })
          : console.log("error")
      )
      .then(() => setUpdatingID(""));
  };

  const onHandleDelete = (id) => {
    setUpdatingID(id);
    deleteTodoItem({ id, selectedGpoupId })
      .then(({ status }) => {
        status === 200
          ? dispatch({ type: ON_DELETE_TODO_ITEM, payload: { selectedGpoupId, id } })
          : console.log("error");
      })
      .then(() => setUpdatingID(""));
  };

  return (
    <ScrollView style={styles.todoList}>
      {listGroups.map((el) =>
        el.id === selectedGpoupId
          ? el.todos.map((el) => (
              <TodoItem
                id={el.id}
                title={el.id === updatingID ? "Updating..." : el.title}
                key={el.id}
                done={el.id === updatingID ? false : el.done}
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
