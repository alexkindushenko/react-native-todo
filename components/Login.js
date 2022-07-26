import React, { useState, useContext } from "react";

import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

import { sendLoginForm } from "../helpers/todo-service";
import { EMAIL_REGEXP, ON_LOGIN_FORM } from "../helpers/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { dispatch } = useContext(AppContext);

  const onHandlePressLogin = () => {
    setError(null);

    if (EMAIL_REGEXP.test(email)) {
      if (password.length >= 6) {
        sendLoginForm({ email, password }).then(({ status }) =>
          status === 200
            ? dispatch({ type: ON_LOGIN_FORM })
            : setError("Incorrect data. Check the data entered.")
        );
      } else {
        return setError("Password must be longer than 6 characters.");
      }
    } else {
      console.log(password);
      return setError("Incorrect email.");
    }
  };

  return (
    <View style={{ width: "75%", alignItems: "center" }}>
      <Text style={{ color: "red", fontSize: 18 }}>{error}</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        type="email"
        onChange={({ nativeEvent: { text } }) => setEmail(text.trim())}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        type="password"
        onChange={({ nativeEvent: { text } }) => setPassword(text.trim())}
        value={password}
      />

      <TouchableOpacity onPress={() => onHandlePressLogin()} disabled={!email || !password}>
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
    backgroundColor: "#799999",
    padding: "2%",
    paddingLeft: "6%",
    paddingRight: "6%",
    borderRadius: 20,
    borderWidth: 1,
  },
});

export default Login;
