import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TodoGroop = ({
  item,
  handleChangeTodoGroup,
  handleDeleteTodoGroup,
  textShadowColor,
  textColor,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={handleChangeTodoGroup} onLongPress={handleDeleteTodoGroup}>
        <Text style={[styles.text, textShadowColor]}>{item.groupTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    paddingLeft: 3,
    paddingRight: 3,
    margin: 2,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
});

export default TodoGroop;
