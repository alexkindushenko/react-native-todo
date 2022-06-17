import React, { useContext, useEffect } from "react";

import { StyleSheet, ScrollView, Text } from "react-native";

import Loading from "./Loading";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const {
    state: { selectedGpoupId, listGroups },
    dispatch,
  } = useContext(AppContext);

  return (
    <ScrollView style={styles.todoList}>
      {listGroups.map((el) =>
        el.id === selectedGpoupId
          ? el.todos.map((el) => <TodoItem id={el.id} title={el.title} key={el.id} />)
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
