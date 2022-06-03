import React, { useState, useContext } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList, Button } from "react-native";

import TodoGroop from "./TodoGroop";
import AppContext from "../helpers/todo-context";

import { ON_CHANGE_LIST_GROUP } from "../helpers/constants";
import TodoList from "./TodoList";

const TodoGroopList = () => {
  const {
    state: { listGroups, selectedGpoupId },
    dispatch,
  } = useContext(AppContext);

  const renderItem = ({ item }) => {
    const textShadowColor =
      item.id === selectedGpoupId ? "rgba(1, 0, 0, 0.9)" : "rgba(1, 0, 0, 0.1)";
    const color = item.id === selectedGpoupId ? "black" : "#f50000";

    return (
      <TodoGroop
        item={item}
        onPress={() => dispatch({ type: ON_CHANGE_LIST_GROUP, payload: item.id })}
        textShadowColor={{ textShadowColor }}
        textColor={{ color }}
        keyExtractor={(item) => item.id}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList horizontal data={listGroups} renderItem={renderItem} />
      </View>
      <TouchableOpacity style={{ width: "13%", marginLeft: 6 }}>
        <Button color="#841584" title="Add" accessibilityLabel="Add To List" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 6,
  },
  list: {
    width: "84%",
    borderWidth: 1,
    borderRadius: 22,
    paddingLeft: 6,
    paddingRight: 6,
  },
});

export default TodoGroopList;
