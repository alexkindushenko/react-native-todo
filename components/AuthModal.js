import React, { useState } from "react";

import Login from "./Login";
import Register from "./Register";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Auth = () => {
  const [login, setLogin] = useState("login");

  return (
    <View style={{ flex: 0.75, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: "3%",
          paddingTop: "50%",
        }}
      >
        <TouchableOpacity onPress={() => setLogin("login")}>
          <Text style={{ fontSize: 24, borderBottomWidth: login === "login" ? 1 : 0 }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLogin("register")}>
          <Text style={{ fontSize: 24, borderBottomWidth: login === "register" ? 1 : 0 }}>
            Registration
          </Text>
        </TouchableOpacity>
      </View>
      {login === "login" ? <Login /> : <Register />}
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    fontSize: 24,
    borderBottomWidth: 1,
  },
});

export default Auth;
