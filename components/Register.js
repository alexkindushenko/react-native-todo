import React, { useState, useContext } from "react";

import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";

const Register = () => {
  return (
    <View style={{ width: "75%", alignItems: "center" }}>
      <TextInput style={styles.input} placeholder="Email" type="email" />
      <TextInput style={styles.input} placeholder="Password" type="password" />
      <TextInput style={styles.input} placeholder="Password" type="password" />
      <TouchableOpacity>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "85%",
    borderWidth: 1,
    fontSize: 24,
    padding: "1.2%",
    paddingLeft: 10,
    borderRadius: 20,
    margin: "3%",
  },
  button: {
    marginTop: "6%",
    fontSize: 24,
    backgroundColor: "#999",
    padding: "2%",
    paddingLeft: "6%",
    paddingRight: "6%",
    borderRadius: 20,
  },
});

export default Register;
