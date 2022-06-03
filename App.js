import { createContext, useReducer } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import AppHeader from "./components/AppHeader";
import TodoGroopList from "./components/TodoGroopList";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import AppContext from "./helpers/todo-context";

import reducer from "./helpers/reducer";

const initialState = {
  listGroups: [
    {
      id: "zaq",
      groupTitle: "To Buy",
      todos: [
        { id: "qaz", title: "new Book" },
        { id: "qax", title: "new Book" },
        { id: "qac", title: "new Book" },
      ],
    },
    {
      id: "xsw",
      groupTitle: "To Watch",
      todos: [
        { id: "wsx", title: "Terminator 2" },
        { id: "wsc", title: "Terminator 3" },
        { id: "wsv", title: "Terminator 4" },
        { id: "wsb", title: "Terminator 5" },
      ],
    },
  ],
  userSetings: { theme: "red" },
  selectedGpoupId: "xsw",
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <View style={styles.container}>
        <AppHeader />
        <TodoGroopList />
        <TodoList />
        <AddTodo />
        <StatusBar style="auto" />
      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
    alignItems: "center",
  },
});
