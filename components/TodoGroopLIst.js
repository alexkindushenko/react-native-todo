import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList, Button } from "react-native";

import TodoGroop from "./TodoGroop";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Forth Item",
  },
];

const TodoGroopLIst = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const textShadowColor = item.id === selectedId ? "rgba(1, 0, 0, 0.9)" : "rgba(1, 0, 0, 0.1)";
    const color = item.id === selectedId ? "black" : "#f50000";

    return (
      <TodoGroop
        item={item}
        onPress={() => setSelectedId(item.id)}
        textShadowColor={{ textShadowColor }}
        textColor={{ color }}
        keyExtractor={(item) => item.id}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList horizontal data={DATA} renderItem={renderItem} />
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

export default TodoGroopLIst;
