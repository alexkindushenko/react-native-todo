import React, { useState, useContext } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList, Text } from "react-native";

import TodoGroop from "./TodoGroop";
import AddGroup from "./AddGroup";
import AppContext from "../helpers/todo-context";

import { ON_CHANGE_LIST_GROUP, ON_DELETE_TODO_GROUP } from "../helpers/constants";
import { deleteTodoGroup } from "../helpers/todo-service";

const TodoGroopList = () => {
  const {
    state: { listGroups, selectedGpoupId },
    dispatch,
  } = useContext(AppContext);

  const [isAdd, setIsAdd] = useState(false);

  const handleDeleteTodoGroup = (id) => {
    deleteTodoGroup(id).then(({ status }) =>
      status === 204
        ? dispatch({ type: ON_DELETE_TODO_GROUP, payload: id })
        : console.log("eeeeeeeeeee")
    );
  };

  const renderItem = ({ item }) => {
    const textShadowColor =
      item._id === selectedGpoupId ? "rgba(1, 0, 0, 0.9)" : "rgba(1, 0, 0, 0.1)";
    const color = item._id === selectedGpoupId ? "black" : "#f50000";

    return (
      <TodoGroop
        item={item}
        handleChangeTodoGroup={() => dispatch({ type: ON_CHANGE_LIST_GROUP, payload: item._id })}
        handleDeleteTodoGroup={() => handleDeleteTodoGroup(item._id)}
        textShadowColor={{ textShadowColor }}
        textColor={{ color }}
        keyExtractor={(item) => item._id}
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
