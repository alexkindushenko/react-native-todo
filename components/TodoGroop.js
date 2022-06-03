import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TodoGroop = ({ item, onPress, textShadowColor, textColor }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.text, textShadowColor]}>{item.title}</Text>
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
    // textShadowColor: "rgba(1, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
});

export default TodoGroop;
