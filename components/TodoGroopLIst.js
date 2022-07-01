import React, { useState, useContext } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList, Text } from "react-native";

import TodoGroop from "./TodoGroop";
import AddGroup from "./AddGroup";
import AppContext from "../helpers/todo-context";

import { ON_CHANGE_LIST_GROUP } from "../helpers/constants";

const TodoGroopList = () => {
  const {
    state: { listGroups, selectedGpoupId },
    dispatch,
  } = useContext(AppContext);

  const [isAdd, setIsAdd] = useState(false);

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
  return isAdd ? (
    <AddGroup onIsAdd={() => setIsAdd(false)} />
  ) : (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList horizontal data={listGroups} renderItem={renderItem} />
      </View>
      <TouchableOpacity style={{ width: "13%", marginLeft: 6 }}>
        <Text style={{ fontSize: 45, marginLeft: "2%" }} onPress={() => setIsAdd(true)}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: "2%",
    marginLeft: "4%",
  },
  list: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 22,
    margin: "2%",
  },
});

export default TodoGroopList;
