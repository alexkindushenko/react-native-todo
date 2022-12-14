import React, { useState, useContext } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

import { ON_ADD_TODO_ITEM } from "../helpers/constants";
import { addTodoItem } from "../helpers/todo-service";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const {
    state: { selectedGpoupId },
    dispatch,
  } = useContext(AppContext);

  const onHandleAdd = (value) => {
    addTodoItem({ title: value, selectedGpoupId }).then(({ data }) =>
      dispatch({ type: ON_ADD_TODO_ITEM, payload: data })
    );

    setValue("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChange={({ nativeEvent: { text } }) => setValue(text)}
        value={value}
        autoCorrect={false}
        placeholder="Add todo"
      />

      <View style={{ width: "13%", marginTop: "1%" }}>
        <Button
          color="#841584"
          title="Add"
          accessibilityLabel="Add To List"
          disabled={!value}
          onPress={() => onHandleAdd(value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: "2%",
  },
  input: {
    width: "84%",
    borderWidth: 1,
    fontSize: 24,
    padding: "1.2%",
    paddingLeft: 10,
    borderRadius: 20,
    marginRight: "2%",
  },
});

export default AddTodo;
