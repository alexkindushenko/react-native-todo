import React, { useContext, useEffect } from "react";

import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import AppHeader from "./AppHeader";
import TodoGroopList from "./TodoGroopList";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Loading from "./Loading";

import { getTodoList } from "../helpers/todo-service";
import { FETCH_TODO_SUCCESS, FETCH_TODO_REQUEST } from "../helpers/constants";

export default function TodoApp() {
  const {
    state: { loading, listGroups },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    if (listGroups.length) return;
    dispatch({ type: FETCH_TODO_REQUEST });
    getTodoList().then((res) => dispatch({ type: FETCH_TODO_SUCCESS, payload: res.data }));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <AppHeader />
      <TodoGroopList />
      {loading ? <Loading /> : null}
      <TodoList />
      <AddTodo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
    alignItems: "center",
  },
});
