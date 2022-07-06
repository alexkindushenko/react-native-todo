import React, { useState, useContext } from "react";

import { View, TextInput, TouchableOpacity, Text, StyleSheet, Button } from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const emailRegexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    <View style={{ width: "75%", alignItems: "center" }}>
      <TextInput style={styles.input} placeholder="Email" type="email" />
      <TextInput style={styles.input} placeholder="Password" type="password" />

      <TouchableOpacity disabled={true}>
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

export default Login;
