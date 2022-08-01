import React, { useState, useContext } from "react";
import { StyleSheet, View, TextInput, Button, TouchableOpacity, Text } from "react-native";

import { ON_ADD_GROUP } from "../helpers/constants";
import { addTodoGroup } from "../helpers/todo-service";

const AddGroup = ({ onIsAdd }) => {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(AppContext);

  const onHandleAdd = (value) => {
    addTodoGroup({ groupTitle: value }).then(({ data }) =>
      dispatch({ type: ON_ADD_GROUP, payload: data })
    );

    setValue("");
    onIsAdd();
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "10%", marginBottom: "1%" }}>
        <TouchableOpacity onPress={onIsAdd}>
          <Text style={{ fontSize: 30 }}>✖</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        onChange={({ nativeEvent: { text } }) => setValue(text)}
        value={value}
        autoCorrect={false}
        placeholder="Add new group"
        autoFocus
      />

      <View style={{ width: "15%", marginTop: "1%" }}>
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
    margin: "4%",
    justifyContent: "space-between",
  },
  input: {
    width: "75%",
    borderWidth: 1,
    fontSize: 24,
    padding: 2,
    paddingLeft: 10,
    borderRadius: 20,
    marginRight: "2%",
  },
});

export default AddGroup;
