import { createContext, useReducer } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import AppHeader from "./components/AppHeader";
import TodoGroopLIst from "./components/TodoGroopLIst";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

import reducer from "./helpers/reducer";

const AppContext = createContext();

const initialState = {
  listGrups: [
    {
      id: "zaq",
      groopTitle: "To Bye",
      todos: [
        { id: "qaz", title: "new Book" },
        { id: "qax", title: "new Book" },
        { id: "qac", title: "new Book" },
      ],
    },
    {
      id: "xsw",
      groopTitle: "To Watch",
      todos: [
        { id: "wsx", title: "Terminator 2" },
        { id: "wsc", title: "Terminator 3" },
        { id: "wsv", title: "Terminator 4" },
        { id: "wsb", title: "Terminator 5" },
      ],
    },
  ],
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <View style={styles.container}>
        <AppHeader />
        <TodoGroopLIst />
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
