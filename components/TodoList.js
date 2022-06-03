import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <ScrollView style={styles.todoList}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  todoList: {
    fontSize: 24,
  },
});

export default TodoList;
